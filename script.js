const _0x5b0e63 = _0xf6db;
function _0xf6db(_0x51a3fd, _0x53f3b8) {
  const _0x4d45a6 = _0x4d45();
  return (
    (_0xf6db = function (_0xf6db52, _0x12627c) {
      _0xf6db52 = _0xf6db52 - 0x1cb;
      let _0x64a363 = _0x4d45a6[_0xf6db52];
      return _0x64a363;
    }),
    _0xf6db(_0x51a3fd, _0x53f3b8)
  );
}
(function (_0x49b800, _0x6993ad) {
  const _0xc0a690 = _0xf6db,
    _0x5a4870 = _0x49b800();
  while (!![]) {
    try {
      const _0x5ded5a =
        (-parseInt(_0xc0a690(0x1cd)) / 0x1) *
          (-parseInt(_0xc0a690(0x1de)) / 0x2) +
        (parseInt(_0xc0a690(0x1dc)) / 0x3) *
          (parseInt(_0xc0a690(0x1e9)) / 0x4) +
        -parseInt(_0xc0a690(0x1df)) / 0x5 +
        (-parseInt(_0xc0a690(0x1cc)) / 0x6) *
          (-parseInt(_0xc0a690(0x1e7)) / 0x7) +
        -parseInt(_0xc0a690(0x1e0)) / 0x8 +
        -parseInt(_0xc0a690(0x1ce)) / 0x9 +
        (-parseInt(_0xc0a690(0x1d7)) / 0xa) *
          (-parseInt(_0xc0a690(0x1ef)) / 0xb);
      if (_0x5ded5a === _0x6993ad) break;
      else _0x5a4870["push"](_0x5a4870["shift"]());
    } catch (_0x27d9d0) {
      _0x5a4870["push"](_0x5a4870["shift"]());
    }
  }
})(_0x4d45, 0xb5738);
let lastWin,
  maxLostRolls = 0x0,
  currentRoll = 0x0,
  betSet = ![],
  showStreak = ![],
  timeStart = Date[_0x5b0e63(0x1d8)](),
  totalRounds = 0x0,
  lostArr = [[0x0, 0x0]],
  winCount = new Array(0x14)["fill"](0x0);
const wait = function () {
  return new Promise(function (_0x59bd2e) {
    setTimeout(_0x59bd2e, 0x7d0);
  });
};
await wait(), (winCount[0x0] = -0x1);
let btns = document[_0x5b0e63(0x1cb)](_0x5b0e63(0x1d5));
document[_0x5b0e63(0x1cb)](_0x5b0e63(0x1d1))[0x9]["firstChild"][
  _0x5b0e63(0x1d4)
][_0x5b0e63(0x1e4)](_0x5b0e63(0x1e5))
  ? (lastWin = _0x5b0e63(0x1e5))
  : (lastWin = _0x5b0e63(0x1db));
const timelapse = function () {
    const _0x4fb8ab = _0x5b0e63;
    let _0x5d0475 = Date[_0x4fb8ab(0x1d8)](),
      _0x501443 = _0x5d0475 - timeStart;
    const _0x44826e = Math[_0x4fb8ab(0x1da)](_0x501443 / 0x3e8),
      _0x52a3fa = _0x44826e % 0x3c,
      _0x25d2e5 = Math["floor"](_0x44826e / 0x3c),
      _0x3a33ff = _0x25d2e5 % 0x3c,
      _0x3a9bd8 = Math["floor"](_0x25d2e5 / 0x3c);
    console[_0x4fb8ab(0x1d3)](
      _0x4fb8ab(0x1e8) +
        _0x3a9bd8 +
        _0x4fb8ab(0x1dd) +
        _0x3a33ff +
        _0x4fb8ab(0x1ee) +
        _0x52a3fa +
        "sec"
    );
  },
  putInArr = function () {
    const _0x7fa27e = _0x5b0e63;
    !lostArr[_0x7fa27e(0x1d6)]((_0x439ec6) => {
      if (_0x439ec6[0x0] === currentRoll) return _0x439ec6[0x1]++, !![];
    }) && lostArr[_0x7fa27e(0x1eb)]([currentRoll, 0x1]);
  },
  change = function () {
    const _0x4af1e0 = _0x5b0e63;
    lastWin === _0x4af1e0(0x1db)
      ? (lastWin = _0x4af1e0(0x1e5))
      : (lastWin = _0x4af1e0(0x1db)),
      currentRoll++;
  },
  backend = function () {
    const _0x72397a = _0x5b0e63;
    if (!btns[0x0][_0x72397a(0x1d4)]["contains"]("bet-btn--disabled")) {
      if (betSet) return;
      const _0x300317 = document[_0x72397a(0x1cb)](_0x72397a(0x1d1))[0x9][
        _0x72397a(0x1ec)
      ];
      betSet = !![];
      if (_0x300317["classList"][_0x72397a(0x1e4)]("" + lastWin))
        winCount[currentRoll]++,
          (currentRoll = 0x0),
          showStreak &&
            (lostArr[_0x72397a(0x1d2)](function (_0x4506a9, _0x522a89) {
              const _0x4cdc9c = _0x72397a;
              console["log"](
                "(" +
                  _0x4506a9[0x0] +
                  _0x4cdc9c(0x1e2) +
                  _0x4506a9[0x1] +
                  _0x4cdc9c(0x1cf) +
                  winCount[_0x4506a9[0x0]] +
                  _0x4cdc9c(0x1e6) +
                  ((winCount[_0x522a89] / _0x4506a9[0x1]) * 0x64)["toFixed"](
                    0x2
                  )
              );
            }),
            timelapse(),
            console[_0x72397a(0x1d3)](
              _0x72397a(0x1d0) +
                winCount[_0x72397a(0x1d9)](
                  (_0x59e195, _0x2b4f0a) => _0x59e195 + _0x2b4f0a,
                  0x0
                ) +
                _0x72397a(0x1ea)
            ),
            console[_0x72397a(0x1d3)]("-"[_0x72397a(0x1ed)](0x1e)),
            (showStreak = ![]));
      else {
        if (_0x300317[_0x72397a(0x1d4)][_0x72397a(0x1e4)]("coin-bonus"))
          currentRoll++;
        else change();
      }
      totalRounds++,
        putInArr(),
        maxLostRolls < currentRoll &&
          ((maxLostRolls = currentRoll),
          console[_0x72397a(0x1d3)](_0x72397a(0x1e1) + maxLostRolls),
          timelapse(),
          console["log"](_0x72397a(0x1e3))),
        totalRounds % 0x3 === 0x0 && (showStreak = !![]);
    } else betSet && (betSet = ![]);
  },
  execute = setInterval(backend, 0x7d0);
function _0x4d45() {
  const _0x18bbc6 = [
    "11290383iNJaAS",
    "\x20times\x20and\x20you\x20won\x20",
    "Profit:\x20",
    ".previous-rolls-item",
    "forEach",
    "log",
    "classList",
    ".bet-btn",
    "some",
    "850QuJbWh",
    "now",
    "reduce",
    "floor",
    "coin-t",
    "577023NxqOWJ",
    "h\x20:\x20",
    "54ZQkKLD",
    "2061310JwvqZU",
    "5092744YNyOuC",
    "Max\x20rolls\x20lost\x20with\x20script\x20preset\x20is:\x20",
    ")\x20lost\x20roll\x20streak\x20from\x20initial\x20bet\x20ran\x20",
    "-----------------------------------------",
    "contains",
    "coin-ct",
    "\x20times;\x20Probability\x20to\x20win\x20at\x20this\x20roll:\x20",
    "11949LaXDSd",
    "Time\x20passed:\x20",
    "16HzFXmU",
    "\x20*\x20your\x20initial\x20bet",
    "push",
    "firstChild",
    "repeat",
    "mins\x20:\x20",
    "100628vOmQlu",
    "querySelectorAll",
    "5118yYOGdV",
    "1613iawTTH",
  ];
  _0x4d45 = function () {
    return _0x18bbc6;
  };
  return _0x4d45();
}
