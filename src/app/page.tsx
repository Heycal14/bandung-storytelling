import Chapter1Opening from "@/components/Chapter1Opening";
import Chapter2MapMorph from "@/components/Chapter2MapMorph";
import Chapter3LineChart from "@/components/Chapter3LineChart";
import Chapter4SplitScreen from "@/components/Chapter4SplitScreen";
import Chapter5Population from "@/components/Chapter5Population";
import Chapter6Temperature from "@/components/Chapter6Temperature";
import Chapter7PullQuote from "@/components/Chapter7PullQuote";
import Chapter8Closing from "@/components/Chapter8Closing";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink relative selection:bg-terracotta selection:text-paper">
      {/* Chapter 1: Opening Sepia Landscape */}
      <Chapter1Opening />

      {/* Chapter 2: Satellite Green Loss Map Morph */}
      <Chapter2MapMorph />

      {/* Chapter 3: Single Line Chart of Built-up Area */}
      <Chapter3LineChart />

      {/* Chapter 4: Split Screen Historical vs Modern Corridor */}
      <Chapter4SplitScreen />

      {/* Chapter 5: Population Counter with Large Mono Metric */}
      <Chapter5Population />

      {/* Chapter 6: Annual Temperature Heat Bar Strip */}
      <Chapter6Temperature />

      {/* Chapter 7: Center Pull Quote */}
      <Chapter7PullQuote />

      {/* Chapter 8: Closing Full-bleed Skyline & Source Colophon */}
      <Chapter8Closing />
    </main>
  );
}
