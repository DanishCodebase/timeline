import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, TrendingDown, Minus, Trophy, Medal } from "lucide-react";

export function TimelineDemo() {
  const rankingData = [
    { year: "2025", rank: 45 },
    { year: "2024", rank: 48 },
    { year: "2023", rank: 49 },
  ];

  const data = [
    {
      title: "Outlook - ICARE India's Best B-Schools",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <RankingCard
              title="Top Private B-Schools"
              rankings={rankingData}
            />
            <RankingCard
              title="Top Private B-Schools"
              rankings={rankingData}
            />
            <RankingCard
              title="Top Private B-Schools"
              rankings={rankingData}
            />
            <RankingCard
              title="Top Private B-Schools"
              rankings={rankingData}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

const RankingCard = ({ title, description, rankings }) => {
  return (
    <Card className="w-full py-0 gap-0 max-w-full overflow-hidden border bg-card text-card-foreground shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 py-4">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          <CardTitle className="text-xl font-bold tracking-tight">
            {title}
          </CardTitle>
        </div>
        {description && (
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="p-0">
        <div className="flex items-center justify-between bg-muted/50 px-6 py-3 text-sm font-medium text-muted-foreground">
          <span>Year</span>
          <span>Ranking</span>
        </div>
        <Separator />

        <div className="divide-y">
          {rankings.map((item, index) => {
            // Calculate trend compared to previous year
            const prevRank =
              index < rankings.length - 1
                ? rankings[index + 1].rank
                : item.rank;
            const trend =
              item.rank < prevRank
                ? "up"
                : item.rank > prevRank
                ? "down"
                : "same";

            // Determine if this is a top 3 ranking
            const isTopThree = item.rank <= 3;

            return (
              <div
                key={index}
                className={`flex items-center justify-between px-6 py-4 transition-colors hover:bg-muted/30 ${
                  index === 0 ? "bg-primary/5" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  {index === 0 && (
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      Latest
                    </Badge>
                  )}
                  <span className="font-medium">{item.year}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Badge
                    variant={isTopThree ? "default" : "outline"}
                    className={`px-3 py-1 text-sm font-semibold ${
                      item.rank === 1
                        ? "bg-amber-500 hover:bg-amber-500/90 text-white"
                        : item.rank === 2
                        ? "bg-zinc-400 hover:bg-zinc-400/90 text-white"
                        : item.rank === 3
                        ? "bg-amber-700 hover:bg-amber-700/90 text-white"
                        : ""
                    }`}
                  >
                    {isTopThree && <Medal className="mr-1 h-3.5 w-3.5" />}#
                    {item.rank}
                  </Badge>

                  {trend === "up" && (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  )}
                  {trend === "down" && (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  )}
                  {trend === "same" && index > 0 && (
                    <Minus className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

// Example usage
// export default function RankingCardExample() {
//   const rankingData = [
//     { year: "2023", rank: 1 },
//     { year: "2022", rank: 3 },
//     { year: "2021", rank: 5 },
//     { year: "2020", rank: 7 },
//     { year: "2019", rank: 12 },
//   ];

//   return (
//     <div className="flex min-h-screen items-center justify-center p-4 bg-background">

//     </div>
//   );
// }
