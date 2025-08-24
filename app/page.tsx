"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Twitter, MessageCircle, Hash, X } from "lucide-react"

// Character data structure
const characters = {
  クトゥルフ神話TRPG: [
    {
      id: 1,
      name: "妹尾　司",
      icon: "/chara/seo_01.png?height=80&width=80",
      images: [
        "/chara/seo_02.png?height=400&width=300",
      ],
    },
    {
      id: 2,
      name: "利根　巴",
      icon: "/chara/tone_01.png?height=80&width=80",
      images: [
        "/chara/tone_02.png?height=400&width=300",
        "/chara/tone_03.png?height=400&width=300",
        "/chara/tone_04.png?height=400&width=300",
      ],
    },
    {
      id: 3,
      name: "大鳳　環",
      icon: "/chara/tamaki_01.png?height=80&width=80",
      images: [
        "/chara/tamaki_02.png?height=400&width=300",
      ],
    },
    { id: 5,
      name: "照恩寺　樹",
      icon: "/chara/itsuki_01.png?height=80&width=80",
      images: [
        "/chara/itsuki_02.png?height=400&width=300",
      ],
    },
    {
      id: 6,
      name: "為折　湊",
      icon: "/chara/minato_01.png?height=80&width=80",
      images: [
        "/chara/minato_02.jpg?height=400&width=300",
      ],
    },
    {
      id: 8,
      name: "門真谷　桜",
      icon: "/chara/tanisaku_01.png?height=80&width=80",
      images: [
        "/chara/tanisaku_02.png?height=400&width=300",
        "/chara/tanisaku_03.png?height=400&width=300",
      ],
    },
    {
      id: 9,
      name: "双川　菫",
      icon: "/chara/sumire_01.png?height=80&width=80",
      images: [
        "/chara/sumire_02.png?height=400&width=300",
      ],
    },
    {
      id: 10,
      name: "波佐々木　澪",
      icon: "/chara/mio_01.png?height=80&width=80",
      images: [
        "/chara/mio_02.png?height=400&width=300",
        "/chara/mio_03.png?height=400&width=300",
        "/chara/mio_04.png?height=400&width=300",
        "/chara/mio_05.png?height=400&width=300",
        "/chara/mio_06.png?height=400&width=300",
      ],
    },
    {
      id: 11,
      name: "高天ヶ原　庵",
      icon: "/chara/iori_01.png?height=80&width=80",
      images: [
        "/chara/iori_03.png?height=400&width=300",
        "/chara/iori_02.png?height=400&width=300",
        "/chara/iori_04.png?height=400&width=300",
        "/chara/iori_05.jpg?height=400&width=300",
      ],
    },
    {
      id: 12,
      name: "時々　響",
      icon: "/chara/hibiki_01.png?height=80&width=80",
      images: [
        "/chara/hibiki_02.png?height=400&width=300",
      ],
    },
    {
      id: 13,
      name: "夏",
      icon: "/chara/natsu_01.png?height=80&width=80",
      images: [
        "/chara/natsu_02.png?height=400&width=300",
      ],
    },
    {
      id: 14,
      name: "櫻",
      icon: "/chara/sakura_01.png?height=80&width=80",
      images: [
        "/chara/sakura_02.png?height=400&width=300",
        "/chara/sakura_03.png?height=400&width=300",
        "/chara/sakura_04.png?height=400&width=300",
        "/chara/sakura_05.png?height=400&width=300",
        "/chara/sakura_06.png?height=400&width=300",
        "/chara/sakura_07.png?height=400&width=300",
      ],
    },
    {
      id: 15,
      name: "南出　莫",
      icon: "/chara/baku_01.png?height=80&width=80",
      images: [
        "/chara/baku_02.jpg?height=400&width=300",
      ],
    },
    {
      id: 16,
      name: "ルネ",
      icon: "/chara/runee_01.png?height=80&width=80",
      images: [
        "/chara/runee_02.jpg?height=400&width=300",
      ],
    },
    {
      id: 17,
      name: "木下　鶫",
      icon: "/chara/tsugumi_01.png?height=80&width=80",
      images: [
        "/chara/tsugumi_02.png?height=400&width=300",
      ],
    },
    {
      id: 18,
      name: "任田　光",
      icon: "/chara/hikari_01.png?height=80&width=80",
      images: [
      ],
    },
    {
      id: 19,
      name: "三ツ池　大",
      icon: "/chara/dai_01.png?height=80&width=80",
      images: [
        "/chara/dai_02.png?height=400&width=300",
      ],
    },
    {
      id: 20,
      name: "竜宮　京",
      icon: "/chara/misato_01.png?height=80&width=80",
      images: [
        "/chara/misato_02.png?height=400&width=300",
      ],
    },
    {
      id: 21,
      name: "中津川　仄",
      icon: "/chara/honoka_01.png?height=80&width=80",
      images: [
        "/chara/honoka_02.png?height=400&width=300",
      ],
    },
    {
      id: 22,
      name: "森野　熊",
      icon: "/chara/kuma_01.png?height=80&width=80",
      images: [
        "/chara/kuma_02.png?height=400&width=300",
      ],
    },
    {
      id: 23,
      name: "後藤　翠",
      icon: "/chara/sui_01.png?height=80&width=80",
      images: [
        "/chara/sui_02.png?height=400&width=300",
      ],
    },
    {
      id: 24,
      name: "天音　来",
      icon: "/chara/rai_01.png?height=80&width=80",
      images: [
        "/chara/rai_02.png?height=400&width=300",
      ],
    },
    {
      id: 25,
      name: "雨宮　紡",
      icon: "/chara/tsumugi_01.png?height=80&width=80",
      images: [
        "/chara/tsumugi_02.jpg?height=400&width=300",
      ],
    },
    {
      id: 26,
      name: "美作坂　明",
      icon: "/placeholder.svg?height=80&width=80",
      images: [
        "/placeholder.svg?height=400&width=300",
      ],
    },
    {
      id: 27,
      name: "山森　愛",
      icon: "/chara/love_01.png?height=80&width=80",
      images: [
        "/chara/love_02.png?height=400&width=300",
      ],
    },
  ],
  新クトゥルフ神話TRPG: [
    {
      id: 4,
      name: "宝々命　壱",
      icon: "/chara/ichi_01.png?height=80&width=80",
      images: [
        "/chara/ichi_02.jpg?height=400&width=300",
      ],
    },
  ],
  エモクロアTRPG: [
    {
      id: 7,
      name: "鯨井　咲",
      icon: "/chara/saki_01.png?height=80&width=80",
      images: [
        "/chara/saki_02.png?height=400&width=300",
      ],
    },
  ],
}

const playedScenarios = {
  クトゥルフ神話TRPG: [
    "丸ノ内線最終列車",
    "白夜の歌",
    "彩天のパレード",
    "惑いの欠片",
    "庭師は何を口遊む（HO2）",
    "美朽の徒花",
    "夢の対価",
    "探索者：Uの証言",
    "探索者：Iの献身",
    "探索者：Xの輪郭（HO2）",
    "Cinderella Cage",
    "狂気の配信者",
    "電車の往く先",
    "人と機械のあいだ",
    "サイレン清掃会社（HO2）",
    "銀蝋と怪盗団（HO2）※if",
    "リボルバー",
    "Fw:死人に口あり（HO1）",
    "コード・メイカー",
    "パンning High",
    "灰と甘露（HO6 稲荷空孤）",
    "ドルペガ（HO1）",
    "アープカディナーチャグズレー！！",
    "まれびとこぞりて",
    "Le Prdis（ル・パラディー）（HO2）",
    "VOID（HO4）",
    "たこさんウィンナー殺人事件",
    "まがときミッドシティ",
    "焼肉飲み放題2時間3000円",
    "プルガトリウムの夜（HO2）※CoC6改変",
    "相棒が猫型配膳ロボットになってるんだが！？（HO：アンドロイド）",
    "アイラスの双眼（HO1）",
    "ワールズエンド・アイドルアクト",
    "灰になってよかった",
    "楽園藪谷合戦城＜悪意コース＞",
    "ファーストピアスとツバキ",
    "MOON GIFTED（HO4）",
    "Call the Name of Your Fate.",
    "快刀乱魔（HO2鳥）",
    "紲",
    "Restraint -拘束-（HO1）",
    "Cooperated Operation",
    "匿名幸福論者は獨と踊る（HO3）",
    "NOBODY*2（HO1）",
    "ロスタイムガール",
    "その容貌に果てを見る",
    "貴方も外側",
    "しょくたく",
    "LOVE DEBUG",
    "エンジェル・デビル・インプロパー",
    "辜月のN",
    "Rejouer¿",
    "サイレン学園",
    "愛罠蜂",
    "ゆらめく魔法市",
    "サモンファミリア♡リンカーネィション",
    "彼方からの君に捧ぐ",
    "リバースリバースリバース（HO2）",
    "THESEUS（HO1）",
  ],
  新クトゥルフ神話TRPG: ["カタシロ"],
  エモクロアTRPG: [
    "皐月の小さな迷い鯉",
    "ロールシャッハシンドローム",
  ],
  マーダーミステリー: [
    "カリカリを食べたのは誰にゃ！？（HO：おもち）",
    "3人の刑事と3つの事件（HO：ポチャ刑事）",
    "ガーディアンズ・ミトロジア（HO：リオネッタ）",
    "軌跡はバイオレットに染まる",
    "さらわれた法廷（HO：篠原）",
    "ほしのおと",
    "箱庭の観測者様へ",
    "そらとくじらのエンゲ",
  ],
  フィアスコ: ["トランスアトランティック"],
  LARP: ["5DIVE（HO：六坂）"],
}

const gmableScenarios = {
  クトゥルフ神話TRPG: [
    "探索者：Uの証言",
    "探索者：Iの献身",
    "探索者：Xの輪郭",
    "Cinderella Cage",
    "人と機械のあいだ",
  ],
  エモクロアTRPG: ["ロールシャッハシンドローム"],
  マーダーミステリー: ["ほしのおと"],
}

function CharacterGallery({ character, onClose }: { character: any; onClose: () => void }) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % character.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + character.images.length) % character.images.length)
  }

  return (
    <DialogContent className="max-w-2xl glass">
      <DialogHeader>
        <DialogTitle className="font-sans-jp font-bold text-primary">{character.name}</DialogTitle>
      </DialogHeader>
      <div className="relative">
        <img
          src={character.images[currentImage] || "/placeholder.svg"}
          alt={`${character.name} illustration ${currentImage + 1}`}
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 glass bg-transparent"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 glass bg-transparent"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {character.images.map((_: any, index: number) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentImage ? "bg-primary" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </DialogContent>
  )
}

export default function TRPGPortfolio() {
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg_image.jpg?height=1080&width=1920')",
        }}
      />
      <div className="fixed inset-0 z-0 bg-background/20" />
      
      {/* Overlay */}
      <div className="fixed inset-0 z-0 bg-black/30 dark:bg-black/70" />
      
      {/* Header */}
      <header className="relative z-10 glass border-b border-white/20 sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-sans-jp font-black text-primary">Kujira's TRPG Profile</h1>
            <nav className="flex flex-wrap gap-2 md:gap-4">
              {["about", "characters", "played-scenarios", "gmable-scenarios", "contact", "schedule"].map((section) => (
                <Button
                  key={section}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(section)}
                  className="text-foreground hover:text-primary hover:bg-white/10"
                >
                  {section === "about" && "私について"}
                  {section === "characters" && "キャラクター"}
                  {section === "played-scenarios" && "通過シナリオ"}
                  {section === "gmable-scenarios" && "GM可能シナリオ"}
                  {section === "contact" && "連絡先"}
                  {section === "schedule" && "スケジュール"}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 py-8 space-y-12">
        {/* About Section */}
        <section id="about">
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-sans-jp font-bold text-primary">✦　私について　✦</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <Avatar className="w-20 h-20 border-2 border-primary/20">
                  <AvatarImage src="/pf_img.png?height=80&width=80" alt="kujiraaaaatrpg" />
                  <AvatarFallback className="text-lg font-bold bg-primary text-primary-foreground">く</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-sans-jp font-bold text-primary">くじら</h3>
                  <p className="text-foreground leading-relaxed">
                    絵を書くTRPGプレイヤーです！
                    CoC6中心ですが、フタリソウサ・ダブルクロス3rd・インセインなど、興味津々なシステムもたくさんあります。<br />
                    最近は特にDX3rd・インセインを頑張りたいと思っているので、日程調整からぜひ、よろしくお願いします！
                  </p>
                </div>
              </div>

              {/* Merged Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                {/* Owned Rulebooks & Supplements */}
                <div className="space-y-3">
                  <h4 className="text-lg font-sans-jp font-bold text-primary">所持ルールブック・サプリメント</h4>
                  <ul className="space-y-3 text-foreground">
                    <li>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        クトゥルフ神話TRPG（6版）
                      </div>
                      <ul className="ml-6 mt-2 space-y-1">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full" />
                          クトゥルフ2010
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full" />
                          クトゥルフ2015
                        </li>
                      </ul>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      新クトゥルフ神話TRPG（7版）
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      フタリソウサ
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      ダブルクロス The 3rd Editionルールブック1
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      ダブルクロス The 3rd Editionルールブック2
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      フィアスコ
                    </li>
                  </ul>
                </div>

                {/* Session Style */}
                <div className="space-y-3">
                  <h4 className="text-lg font-sans-jp font-bold text-primary">セッションスタイル</h4>
                  <p className="text-foreground">DiscordとCCFOLIAを使った</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-center gap-2 text-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      ボイスセッション
                    </li>
                    <li className="flex items-center gap-2 text-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      半テキストセッション
                    </li>
                  </ul>
                </div>

                {/* Romance RP Preference */}
                <div className="space-y-3">
                  <h4 className="text-lg font-sans-jp font-bold text-primary">恋愛RP傾向</h4>
                  <p className="text-foreground font-semibold text-lg">3L可</p>
                  <p className="text-foreground leading-relaxed">
                    「恋」「愛」だけで言い表せない関係も大好きです！</p>
                </div>

                {/* Preferred Scenario Types */}
                <div className="space-y-3">
                  <h4 className="text-lg font-sans-jp font-bold text-primary">好きなシナリオ傾向</h4>
                  <div className="flex flex-wrap gap-2">
                    {["戦闘", "推理・考察", "エモ", "茶番", "秘匿"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed">
                    他にPvP、鬱展開・ロストなど、割とどんな展開でも楽しめます！
                  </p>
                </div>

                {/* Available Times */}
                <div className="space-y-3">
                  <h4 className="text-lg font-sans-jp font-bold text-primary">遊べる時間</h4>
                  <p className="text-foreground text-lg">平日夜（21:00～）か土日祝</p>
                </div>

                {/* Other */}
                <div className="space-y-3">
                  <h4 className="text-lg font-sans-jp font-bold text-primary">その他</h4>
                  <p className="text-foreground leading-relaxed">
                    マーダーミステリー、ボードゲーム、謎解き、脱出ゲームなども遊びます！<br />
                    誘い合えるお友だちができたら嬉しいです！
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Characters Section */}
        <section id="characters">
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-sans-jp font-bold text-primary">✦　キャラクター　✦</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="クトゥルフ神話TRPG" className="w-full">
                <TabsList className="grid w-full grid-cols-3 glass border-white/20 h-auto">
                  <TabsTrigger value="クトゥルフ神話TRPG" className="text-xs md:text-sm h-auto whitespace-normal py-2">
                    クトゥルフ神話TRPG
                  </TabsTrigger>
                  <TabsTrigger value="新クトゥルフ神話TRPG" className="text-xs md:text-sm h-auto whitespace-normal py-2">
                    新クトゥルフ神話TRPG
                  </TabsTrigger>
                  <TabsTrigger value="エモクロアTRPG" className="text-xs md:text-sm h-auto whitespace-normal py-2">
                    エモクロアTRPG
                  </TabsTrigger>
                </TabsList>
                {Object.entries(characters).map(([system, chars]) => (
                  <TabsContent key={system} value={system} className="mt-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
                      {chars.map((character) => (
                        <Dialog key={character.id}>
                          <DialogTrigger asChild>
                            <Card className="cursor-pointer hover:scale-105 transition-transform glass border-white/20 hover:border-primary/30">
                              <CardContent className="p-1 text-center space-y-2">
                                <img
                                  src={character.icon || "/placeholder.svg"}
                                  alt={character.name}
                                  className="w-28 h-28 mx-auto rounded-lg border-2 border-primary/20"
                                />
                                <h4 className="font-sans-jp font-semibold text-primary">{character.name}</h4>
                              </CardContent>
                            </Card>
                          </DialogTrigger>
                          <CharacterGallery character={character} onClose={() => setSelectedCharacter(null)} />
                        </Dialog>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Played Scenarios Section */}
        <section id="played-scenarios">
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-sans-jp font-bold text-primary">✦　通過シナリオ　✦</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {Object.entries(playedScenarios).map(([system, scenarios]) => (
                  <AccordionItem key={system} value={system} className="border-white/20">
                    <AccordionTrigger className="text-primary font-sans-jp font-semibold hover:text-primary/80">
                      {system}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 ml-4">
                        {scenarios.map((scenario, index) => (
                          <li key={index} className="flex items-center gap-2 text-foreground">
                            <div className="w-2 h-2 bg-secondary rounded-full" />
                            {scenario}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* GMable Scenarios Section */}
        <section id="gmable-scenarios">
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-sans-jp font-bold text-primary">✦　GM可能シナリオ　✦</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {Object.entries(gmableScenarios).map(([system, scenarios]) => (
                  <AccordionItem key={system} value={system} className="border-white/20">
                    <AccordionTrigger className="text-primary font-sans-jp font-semibold hover:text-primary/80">
                      {system}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 ml-4">
                        {scenarios.map((scenario, index) => (
                          <li key={index} className="flex items-center gap-2 text-foreground">
                            <div className="w-2 h-2 bg-secondary rounded-full" />
                            {scenario}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-sans-jp font-bold text-primary">✦　連絡先　✦</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 justify-center">
                {/* X (Twitter) Link */}
                <a href="https://x.com/kujiraaaaa_trpg" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/20 hover:border-primary/30 bg-transparent"
                  >
                    <X className="w-5 h-5 mr-2" />
                    X
                  </Button>
                </a>

                {/* Misskey Link */}
                <a href="https://takusuki.com/@kujiraaaaa" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/20 hover:border-primary/30 bg-transparent"
                  >
                    <Hash className="w-5 h-5 mr-2" />
                    Misskey（TRPGがすきー！）
                  </Button>
                </a>

                {/* Discord Link */}
                <a href="https://discord.com/users/847736327499415572" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="glass border-white/20 hover:border-primary/30 bg-transparent"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Discord
                </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Schedule Section */}
        <section id="schedule">
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-sans-jp font-bold text-primary">✦　スケジュール　✦</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-foreground">最新のスケジュールはこちら</p>
              <a href="https://character-sheets.appspot.com/schedule/list?key=ahVzfmNoYXJhY3Rlci1zaGVldHMtbXByHwsSEkRpc2NvcmRTZXNzaW9uRGF0YRiAgMDGwrrSCAw" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Daycordでスケジュールを確認
              </Button>
              </a>
            </CardContent>
          </Card>
        </section>
        {/* Personal Commissions Section */}
        <section id="commissions">
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-sans-jp font-bold text-primary">
                ✦　個人依頼について　✦
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-foreground">イラストの個人依頼はこちらから！</p>
              <a href="https://magical-scar-17a.notion.site/255bc596e0528000bfb5de535564997c" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  くじらのイラスト制作直接依頼
                </Button>
              </a>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
