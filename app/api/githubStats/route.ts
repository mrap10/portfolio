import { NextResponse } from "next/server";

export async function GET() {
  const today = new Date();
  const fromDate = new Date(today.getFullYear(), 6, 1); // July 1st
  const username = "mrap10";

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        query($userName: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $userName) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        userName: username,
        from: fromDate.toISOString(),
        to: today.toISOString(),
      },
    }),
  });

  const result = await response.json();

  if (!response.ok || result.errors) {
    return NextResponse.json(
      { error: result.errors?.[0]?.message || "GitHub API Error" },
      { status: 500 }
    );
  }

  const weeks =
    result.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];

  const contributions = weeks.flatMap((week: any) =>
    week.contributionDays.map((day: any) => {
      let level: 0 | 1 | 2 | 3 | 4 = 0;
      if (day.contributionCount > 0) level = 1;
      if (day.contributionCount >= 3) level = 2;
      if (day.contributionCount >= 6) level = 3;
      if (day.contributionCount >= 9) level = 4;

      return {
        date: day.date,
        count: day.contributionCount,
        level,
      };
    })
  );

  return NextResponse.json(contributions);
}
