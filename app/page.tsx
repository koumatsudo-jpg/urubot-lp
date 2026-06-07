import Image from "next/image";

const features = [
  {
    title: "AI投稿生成",
    description:
      "カテゴリを選ぶだけで、Claudeが高品質な投稿を一括生成。エピソード型、逆説型など、バズりやすいパターンを自動で使い分けます。",
    icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
  },
  {
    title: "競合分析 & スコアリング",
    description:
      "競合投稿を独自の拡散力スコアで数値化。リプライ率、リポスト率、フォロワー比から配信ステージまで自動推定します。",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
  },
  {
    title: "自動フィードバックループ",
    description:
      "投稿実績と競合データをAIが学習し、生成プロンプトを自動改善。使うほど投稿の質が上がり続けます。",
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182",
  },
  {
    title: "スケジュール投稿",
    description:
      "カレンダーから日時を選ぶだけ。QStash連携で確実に自動投稿。ストック管理で3週間分の投稿を一気に準備できます。",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
  },
  {
    title: "CRM & LINE連携",
    description:
      "見込み客をステージ管理。LINE公式アカウントと連携して、チャットボットが24時間自動対応します。",
    icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
  },
  {
    title: "売上分析 & レポート",
    description:
      "Stripe連携で売上を自動トラッキング。月次レポートをAIが自動生成し、次のアクションを提案します。",
    icon: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z",
  },
];

const steps = [
  { num: "1", title: "アカウント作成", desc: "メールアドレスで30秒で登録" },
  { num: "2", title: "Threads連携", desc: "OAuthで安全にワンクリック接続" },
  { num: "3", title: "投稿生成", desc: "カテゴリを選んでAIが一括生成" },
  { num: "4", title: "自動運用", desc: "スケジュール投稿+AI学習で成長" },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <Image src="/icon.png" alt="UruBot" width={28} height={28} className="rounded-lg sm:w-8 sm:h-8" />
            <span className="text-base sm:text-lg font-bold text-zinc-900">UruBot</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-600">
            <a href="#features" className="hover:text-zinc-900 transition-colors">機能</a>
            <a href="#how-it-works" className="hover:text-zinc-900 transition-colors">使い方</a>
            <a href="#pricing" className="hover:text-zinc-900 transition-colors">料金</a>
            <a href="#faq" className="hover:text-zinc-900 transition-colors">FAQ</a>
          </nav>
          <a
            href="https://app.urubot.app/signup"
            className="rounded-full bg-zinc-900 px-4 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-medium text-white hover:bg-zinc-700 transition-colors"
          >
            無料で始める
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-14 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Powered by Claude AI
            </span>
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-zinc-900 sm:mt-6 sm:text-6xl animate-fade-in-up animate-delay-100">
            AIがThreads運用を
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              まるごと自動化
            </span>
          </h1>
          <p className="mt-4 text-base text-zinc-600 sm:mt-6 sm:text-xl animate-fade-in-up animate-delay-200">
            投稿生成、競合分析、スコアリング、スケジュール投稿。
            <br className="hidden sm:block" />
            UruBotなら、毎日の投稿作業を90%削減できます。
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="https://app.urubot.app/signup"
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-sm sm:py-3.5 sm:text-base font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5"
            >
              無料で始める
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto rounded-full border border-zinc-300 px-8 py-3 text-sm sm:py-3.5 sm:text-base font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
            >
              機能を見る
            </a>
          </div>
          <p className="mt-3 text-xs text-zinc-400 sm:mt-4 animate-fade-in-up animate-delay-400">
            クレジットカード不要 / 14日間無料 / いつでもキャンセル可能
          </p>
        </div>

        {/* Hero product shot */}
        <div className="relative mx-auto mt-12 max-w-5xl px-4 sm:mt-16 sm:px-6 animate-fade-in-up animate-delay-400">
          <div className="overflow-hidden rounded-xl border border-zinc-200/80 bg-white shadow-2xl shadow-blue-500/10 ring-1 ring-zinc-900/5 sm:rounded-2xl">
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 border-b border-zinc-100 bg-zinc-50/80 px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-3 hidden truncate rounded-md bg-white px-3 py-0.5 text-[11px] text-zinc-400 ring-1 ring-zinc-200 sm:inline-block">
                app.urubot.app/dashboard
              </span>
            </div>
            <Image
              src="/shot-dashboard.png"
              alt="UruBot ダッシュボード画面"
              width={1600}
              height={920}
              priority
              className="w-full"
            />
          </div>
          {/* glow */}
          <div className="absolute -inset-x-4 -bottom-6 -z-10 h-24 bg-gradient-to-t from-blue-200/30 to-transparent blur-2xl" />
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-zinc-100 bg-zinc-50 py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="flex items-center justify-center gap-6 sm:gap-16">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-zinc-900">12+</div>
              <div className="mt-1 text-xs sm:text-sm text-zinc-500">搭載機能</div>
            </div>
            <div className="h-8 w-px bg-zinc-200" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-zinc-900">Claude AI</div>
              <div className="mt-1 text-xs sm:text-sm text-zinc-500">最新モデル搭載</div>
            </div>
            <div className="h-8 w-px bg-zinc-200" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-zinc-900">90%</div>
              <div className="mt-1 text-xs sm:text-sm text-zinc-500">作業時間を削減</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-14 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Threads運用に必要な<span className="text-blue-600">すべて</span>が揃う
            </h2>
            <p className="mt-3 text-sm sm:mt-4 sm:text-lg text-zinc-500">
              投稿の作成から分析まで、ワンストップで完結
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="mt-3 text-base sm:mt-4 sm:text-lg font-semibold text-zinc-900">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500 sm:mt-2">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="border-t border-zinc-100 bg-gradient-to-b from-white to-zinc-50 py-14 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              実際の<span className="text-blue-600">管理画面</span>
            </h2>
            <p className="mt-3 text-sm sm:mt-4 sm:text-lg text-zinc-500">
              競合分析もスケジュール投稿も、ひと目で把握できる
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-2">
            {/* Generate */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm transition-all hover:shadow-xl hover:shadow-blue-500/5 sm:p-4">
              <div className="overflow-hidden rounded-xl border border-zinc-100">
                <Image
                  src="/shot-generate.png"
                  alt="UruBot 投稿生成画面"
                  width={1600}
                  height={920}
                  className="w-full"
                />
              </div>
              <div className="px-2 pb-1 pt-4">
                <h3 className="text-base sm:text-lg font-semibold text-zinc-900">カテゴリを選ぶだけでAIが一括生成</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                  エピソード型・逆説型などのパターンを選択。Claudeが1週間分の投稿をまとめて作成します。
                </p>
              </div>
            </div>
            {/* Competitors */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm transition-all hover:shadow-xl hover:shadow-blue-500/5 sm:p-4">
              <div className="overflow-hidden rounded-xl border border-zinc-100">
                <Image
                  src="/shot-competitors.png"
                  alt="UruBot 競合分析画面"
                  width={1440}
                  height={900}
                  className="w-full"
                />
              </div>
              <div className="px-2 pb-1 pt-4">
                <h3 className="text-base sm:text-lg font-semibold text-zinc-900">競合を拡散力スコアで丸裸に</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                  競合アカウントの投稿を独自スコアで数値化。バズの構造を分析して、自分の投稿に活かせます。
                </p>
              </div>
            </div>
            {/* AI Learning */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm transition-all hover:shadow-xl hover:shadow-blue-500/5 sm:p-4">
              <div className="overflow-hidden rounded-xl border border-zinc-100">
                <Image
                  src="/shot-ai-learning.png"
                  alt="UruBot AI学習画面"
                  width={1600}
                  height={920}
                  className="w-full"
                />
              </div>
              <div className="px-2 pb-1 pt-4">
                <h3 className="text-base sm:text-lg font-semibold text-zinc-900">使うほど賢くなるAI学習</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                  競合データと投稿実績からバズの勝ちパターンを自動抽出。生成プロンプトが自動で改善され続けます。
                </p>
              </div>
            </div>
            {/* Calendar */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm transition-all hover:shadow-xl hover:shadow-blue-500/5 sm:p-4">
              <div className="overflow-hidden rounded-xl border border-zinc-100">
                <Image
                  src="/shot-calendar.png"
                  alt="UruBot コンテンツカレンダー画面"
                  width={1440}
                  height={900}
                  className="w-full"
                />
              </div>
              <div className="px-2 pb-1 pt-4">
                <h3 className="text-base sm:text-lg font-semibold text-zinc-900">投稿を予約してあとは自動</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                  朝・昼・夜の最適な時間に自動投稿。カレンダーでストック状況がひと目でわかります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-zinc-50 py-14 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              始め方は<span className="text-blue-600">かんたん</span>
            </h2>
            <p className="mt-3 text-sm sm:mt-4 sm:text-lg text-zinc-500">
              4ステップで今日から自動運用をスタート
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.num} className="relative rounded-2xl bg-white p-4 sm:p-6 shadow-sm">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-sm sm:text-lg font-bold text-white">
                  {s.num}
                </div>
                <h3 className="mt-3 text-sm sm:mt-4 sm:text-base font-semibold text-zinc-900">{s.title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-14 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              シンプルな料金プラン
            </h2>
            <p className="mt-3 text-sm sm:mt-4 sm:text-lg text-zinc-500">
              14日間の無料トライアル付き
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:mt-16 sm:gap-8 lg:grid-cols-2">
            {/* Free */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
              <h3 className="text-base sm:text-lg font-semibold text-zinc-900">フリー</h3>
              <div className="mt-3 sm:mt-4 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-bold text-zinc-900">0</span>
                <span className="text-sm sm:text-base text-zinc-500">円 / 月</span>
              </div>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-zinc-500">まずは試してみたい方に</p>
              <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3 text-sm text-zinc-600">
                {["AI投稿生成（月30件）", "競合分析（3アカウント）", "スケジュール投稿", "基本レポート"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://app.urubot.app/signup"
                className="mt-6 sm:mt-8 block w-full rounded-full border border-zinc-300 py-2.5 sm:py-3 text-center text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
              >
                無料で始める
              </a>
              <p className="mt-2 sm:mt-3 text-center text-xs text-zinc-400">ずっと無料・クレカ不要</p>
            </div>
            {/* Pro */}
            <div className="relative rounded-2xl border-2 border-blue-500 bg-white p-6 sm:p-8 shadow-lg shadow-blue-500/10">
              <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-0.5 text-xs font-medium text-white">
                おすすめ
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-zinc-900">プロ</h3>
              <div className="mt-3 sm:mt-4 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-bold text-zinc-900">4,980</span>
                <span className="text-sm sm:text-base text-zinc-500">円 / 月</span>
              </div>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-zinc-500">本格的にThreadsを伸ばしたい方に</p>
              <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3 text-sm text-zinc-600">
                {[
                  "AI投稿生成（無制限）",
                  "競合分析（無制限）",
                  "自動フィードバックループ",
                  "スケジュール投稿",
                  "CRM & LINE連携",
                  "売上分析 & 月次レポート",
                  "優先サポート",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://app.urubot.app/signup?plan=pro"
                className="mt-6 sm:mt-8 block w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 py-2.5 sm:py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
              >
                14日間無料で試す
              </a>
              <p className="mt-2 sm:mt-3 text-center text-xs text-zinc-400">クレジットカード不要</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-zinc-50 py-14 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              プラン<span className="text-blue-600">比較</span>
            </h2>
            <p className="mt-3 text-sm sm:mt-4 sm:text-lg text-zinc-500">
              あなたに合ったプランを選べます
            </p>
          </div>
          <div className="mt-10 overflow-x-auto sm:mt-16">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-500">機能</th>
                  <th className="py-3 px-4 text-center font-semibold text-zinc-900">フリー</th>
                  <th className="py-3 pl-4 text-center font-semibold text-blue-600">プロ</th>
                </tr>
              </thead>
              <tbody className="text-zinc-600">
                {[
                  { feature: "AI投稿生成", free: "月30件", pro: "無制限" },
                  { feature: "競合アカウント追跡", free: "3件", pro: "無制限" },
                  { feature: "スケジュール投稿", free: true, pro: true },
                  { feature: "競合スコアリング", free: true, pro: true },
                  { feature: "自動フィードバックループ", free: false, pro: true },
                  { feature: "AIレビュー", free: false, pro: true },
                  { feature: "CRM & LINE連携", free: false, pro: true },
                  { feature: "売上分析", free: false, pro: true },
                  { feature: "月次AIレポート", free: false, pro: true },
                  { feature: "優先サポート", free: false, pro: true },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-zinc-100">
                    <td className="py-3 pr-4 text-zinc-700">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.free === "boolean" ? (
                        row.free ? (
                          <svg className="inline h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        ) : (
                          <span className="text-zinc-300">&mdash;</span>
                        )
                      ) : (
                        <span className="text-zinc-700">{row.free}</span>
                      )}
                    </td>
                    <td className="py-3 pl-4 text-center">
                      {typeof row.pro === "boolean" ? (
                        <svg className="inline h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                      ) : (
                        <span className="font-medium text-blue-600">{row.pro}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              よくある<span className="text-blue-600">質問</span>
            </h2>
          </div>
          <div className="mt-10 sm:mt-16 divide-y divide-zinc-200">
            {[
              {
                q: "無料プランに期限はありますか？",
                a: "いいえ、フリープランはずっと無料でご利用いただけます。月30件の投稿生成と3アカウントの競合分析が含まれます。",
              },
              {
                q: "14日間のトライアル後はどうなりますか？",
                a: "自動的にフリープランに切り替わります。クレジットカードの登録は不要なので、勝手に課金されることはありません。",
              },
              {
                q: "プロプランの解約はいつでもできますか？",
                a: "はい、いつでもワンクリックで解約できます。解約後も契約期間の終了まではプロ機能をご利用いただけます。",
              },
              {
                q: "Threadsアカウントの連携は安全ですか？",
                a: "Meta公式のOAuth認証を使用しており、パスワードをUruBotに共有する必要はありません。連携はいつでも解除できます。",
              },
              {
                q: "AIが生成した投稿はそのまま使えますか？",
                a: "はい、そのまま投稿できる品質で生成されます。もちろん編集も可能です。投稿前にプレビューで確認し、必要に応じて調整できます。",
              },
              {
                q: "複数のThreadsアカウントに対応していますか？",
                a: "はい、プロプランでは複数のThreadsアカウントを接続し、アカウントを切り替えて運用できます。",
              },
              {
                q: "データのセキュリティはどうなっていますか？",
                a: "データはSupabase（PostgreSQL）に暗号化して保存されます。通信はすべてHTTPS暗号化されており、第三者にデータが共有されることはありません。",
              },
            ].map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer items-center justify-between py-4 sm:py-5 text-sm sm:text-base font-medium text-zinc-900 hover:text-blue-600 transition-colors">
                  {item.q}
                  <svg className="h-5 w-5 shrink-0 text-zinc-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="pb-4 sm:pb-5 text-sm leading-relaxed text-zinc-500">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 py-14 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            今日からThreads運用を自動化しよう
          </h2>
          <p className="mt-3 text-sm sm:mt-4 sm:text-lg text-blue-100">
            面倒な投稿作成はAIに任せて、あなたは戦略に集中できます。
          </p>
          <a
            href="https://app.urubot.app/signup"
            className="mt-6 sm:mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm sm:py-3.5 sm:text-base font-semibold text-blue-700 shadow-lg hover:bg-blue-50 transition-colors"
          >
            無料で始める
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2">
              <Image src="/icon.png" alt="UruBot" width={24} height={24} className="rounded-md" />
              <span className="text-sm font-semibold text-zinc-900">UruBot</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-500">
              <a href="https://app.urubot.app/terms" className="hover:text-zinc-900 transition-colors">利用規約</a>
              <a href="https://app.urubot.app/privacy" className="hover:text-zinc-900 transition-colors">プライバシーポリシー</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9GA4TZx4-Hat-X_Gb9gkbP5h2kueKIy_tve7IUcFZMJPAEQ/viewform" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">お問い合わせ</a>
            </div>
            <p className="text-xs text-zinc-400">&copy; 2026 UruBot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
