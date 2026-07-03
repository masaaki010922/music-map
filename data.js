const nodes = [
  {
    id: "fresh",
    title: "Fresh",
    artist: "Sly & The Family Stone",
    year: 1973,
    genre: "Funk / Soul",
    note: "スライ以後のファンク、ソウル、R&Bに接続する起点として配置。"
  },
  {
    id: "lovesexy",
    title: "Lovesexy",
    artist: "Prince",
    year: 1988,
    genre: "Funk / Pop / R&B",
    note: "ファンク、ポップ、ゴスペル的な高揚感を統合したプリンス作品として配置。"
  },
  {
    id: "voodoo",
    title: "Voodoo",
    artist: "D'Angelo",
    year: 2000,
    genre: "Neo Soul / R&B",
    note: "70年代ファンク／ソウルの身体性を、ヒップホップ以後のグルーヴ感で再構成した作品として配置。"
  },
  {
    id: "blonde",
    title: "blonde",
    artist: "Frank Ocean",
    year: 2016,
    genre: "Alternative R&B",
    note: "R&Bをより私的、断片的、内省的なソングライティングへ接続した作品として配置。"
  },
  {
    id: "baby",
    title: "Baby",
    artist: "Dijon",
    year: 2025,
    genre: "Alternative R&B / Soul",
    note: "ラフな録音感、ソウル、R&B、インディー的な質感が混ざる作品として配置。"
  },
  {
    id: "swag",
    title: "SWAG",
    artist: "Justin Bieber",
    year: 2025,
    genre: "Pop / R&B",
    note: "2020年代R&B／ポップの私的でラフな方向性として、Dijon周辺の感覚と接続。"
  },
{
  id: "the-rainbow-children",
  title: "The Rainbow Children",
  artist: "Prince",
  year: 2001,
  genre: "Jazz-Funk / R&B / Soul",
  note: "Princeがジャズ、ファンク、ソウル、宗教的・思想的テーマを濃く結びつけた2000年代初頭の作品として配置。"
}
];

const links = [
  {
    source: "fresh",
    target: "lovesexy",
    type: "oneway",
    note: "Sly & The Family StoneからPrinceへのファンク／ソウル的な影響線。"
  },
  {
    source: "lovesexy",
    target: "voodoo",
    type: "oneway",
    note: "Prince以後のファンク、セクシュアリティ、R&B感覚がD'Angeloに接続する線。"
  },
  {
    source: "voodoo",
    target: "blonde",
    type: "oneway",
    note: "D'Angelo以後のR&Bの私的・内省的な展開としてFrank Oceanへ接続する線。"
  },
  {
    source: "blonde",
    target: "baby",
    type: "oneway",
    note: "Frank Ocean以後のオルタナティブR&Bの感覚がDijonへ接続する線。"
  },
  {
    source: "baby",
    target: "swag",
    type: "mutual",
    note: "DijonとJustin Bieber『SWAG』周辺の相互的な制作・感覚の接続。"
  },
　{
  source: "voodoo",
  target: "the-rainbow-children",
  type: "oneway",
  note: "D'Angelo『Voodoo』以後の生演奏志向、ファンク／ソウル回帰、ジャム感が、Prince『The Rainbow Children』と接続する線。"
}
];
