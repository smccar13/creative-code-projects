let quote = "";
let original = quote;
let words = RiTa.tokenize(quote);
let censoredWords = "";

let canvas, input, button, quoteSelect;

function setup() {
  textSize(20);
  canvas = createCanvas(1000, 1500);

  input = createInput();
  input.parent("inputRow");

  button = createButton("Censor yourself");
  button.parent("inputRow");
  
  quoteSelect = createSelect();
  quoteSelect.parent("container");
  
  canvas.parent("container");
  
  quoteSelect.option("Or censor someone else...", "");
  quoteSelect.option("William Shakespeare",
  `"Cowards die many times before their deaths;
The valiant never taste of death but once.
Of all the wonders that I yet have heard,
It seems to me most strange that men should fear;
Seeing that death, a necessary end,
Will come when it will come."
― William Shakespeare, Julius Caesar`
);
  quoteSelect.option("Harper Lee",
  `“Atticus said to Jem one day, "I’d rather you shot at tin cans in the backyard, but I know you’ll go after birds. Shoot all the blue jays you want, if you can hit ‘em, but remember it’s a sin to kill a mockingbird." That was the only time I ever heard Atticus say it was a sin to do something, and I asked Miss Maudie about it. "Your father’s right," she said. "Mockingbirds don’t do one thing except make music for us to enjoy. They don’t eat up people’s gardens, don’t nest in corn cribs, they don’t do one thing but sing their hearts out for us. That’s why it’s a sin to kill a mockingbird.”
― Harper Lee, To Kill a Mockingbird`
);
  quoteSelect.option("Franz Kafka",
  `“I think we ought to read only the kind of books that wound or stab us. If the book we're reading doesn't wake us up with a blow to the head, what are we reading for? So that it will make us happy, as you write? Good Lord, we would be happy precisely if we had no books, and the kind of books that make us happy are the kind we could write ourselves if we had to. But we need books that affect us like a disaster, that grieve us deeply, like the death of someone we loved more than ourselves, like being banished into forests far from everyone, like a suicide. A book must be the axe for the frozen sea within us. That is my belief.”
― Franz Kafka`
);
  quoteSelect.option("Maya Angelou",
  `“...You may shoot me with your words,
You may cut me with your eyes,
You may kill me with your hatefulness,
But still, like air, I’ll rise.

Does my sexiness upset you?
Does it come as a surprise
That I dance like I've got diamonds
At the meeting of my thighs?

Out of the huts of history’s shame
I rise
Up from a past that’s rooted in pain
I rise
I'm a black ocean, leaping and wide,
Welling and swelling I bear in the tide.

Leaving behind nights of terror and fear
I rise
Into a daybreak that’s wondrously clear
I rise
Bringing the gifts that my ancestors gave,
I am the dream and the hope of the slave.
I rise
I rise
I rise.”
― Maya Angelou, Still I Rise`
);
  quoteSelect.option("Ray Bradbury",
  `“The good writers touch life often. The mediocre ones run a quick hand over her. The bad ones rape her and leave her for the flies.”
― Ray Bradbury, Fahrenheit 451`
)
  quoteSelect.option("Toni Morrison",
  `“And fantasy it was, for we were not strong, only aggressive; we were not free, merely licensed; we were not compassionate, we were polite; not good, but well behaved. We courted death in order to call ourselves brave, and hid like thieves from life. We substituted good grammar for intellect; we switched habits to simulate maturity; we rearranged lies and called it truth, seeing in the new pattern of an old idea the Revelation and the Word.”
― Toni Morrison, The Bluest Eye`
)
    quoteSelect.option("George Orwell",
  `“Don't you see that the whole aim of Newspeak is to narrow the range of thought? In the end we shall make thought-crime literally impossible, because there will be no words in which to express it. Every concept that can ever be needed will be expressed by exactly one word, with its meaning rigidly defined and all its subsidiary meanings rubbed out and forgotten. . . . The process will still be continuing long after you and I are dead. Every year fewer and fewer words, and the range of consciousness always a little smaller. Even now, of course, there's no reason or excuse for committing thought-crime. It's merely a question of self-discipline, reality-control. But in the end there won't be any need even for that. . . . Has it ever occurred to you, Winston, that by the year 2050, at the very latest, not a single human being will be alive who could understand such a conversation as we are having now?”
― George Orwell, 1984`
)
  quoteSelect.option("The Supreme Court",
  `“I shall not today attempt further to define the kinds of material I understand to be embraced within that shorthand description — "hard-core pornography" — and perhaps I could never succeed in intelligibly doing so. But I know it when I see it.”
― Supreme Court Justice Potter Stewart, describing his threshold test for obscenity in Jacobellis v. Ohio, 1964`
)
    quoteSelect.option("The Bible",
  `1. You shall have no other gods before Me.
2. You shall not make for yourself an idol.
3. You shall not take the name of the Lord your God in vain.
4. Remember the Sabbath day, to keep it holy.
5. Honor your father and your mother.
6. You shall not murder.
7. You shall not commit adultery.
8. You shall not steal.
9. You shall not bear false witness against your neighbor.
10. You shall not covet.
— The Ten Commandments, Exodus 20:1–17
`
)

  quoteSelect.changed(loadPresetQuote);
  button.mousePressed(getText);

  censor();
}


function draw() {
  background(232, 223, 200)
  stroke(160, 130, 80);
  strokeWeight(2);
  line(width / 2, 0, width / 2, height);

  noStroke();
  fill(60, 45, 30);
  textSize(16);
  textFont('Cormorant Infant');
  text("Original:", 20, 60);
  text("Censored:", width / 2 + 20, 60);

  textSize(22);
  fill(70, 55, 40);

  text(original, 20, 100, width / 2 - 40, height - 120);
  text(censoredWords, width / 2 + 20, 100, width / 2 - 40, height - 120);

}


function getText() {
  original = input.value();
  let phraseCensored = censorPhrases(original);
  words = RiTa.tokenize(phraseCensored);
  censor();
  input.value("");
}

function censorPhrases(text) {
  let phrases = [
    ["sexual assault", "SA"],
    ["self harm", "SH"],
    ["self-harm", "SH"],
    ["eating disorder", "ED"],
    ["commit suicide", "kermit sewer-slide"],
    ["committed suicide", "kermitted sewer-slide"],
    ["commits suicide", "kermits sewer-slide"],
    ["committing suicide", "kermiting sewer-slide"],
  ];

  for (let [phrase, newText] of phrases) {
    let regex = new RegExp("\\b" + phrase + "\\b", "gi");
    text = text.replace(regex, newText);
  }

  return text;
}

function censor() {
  for (let i = 0; i < words.length; i++) {
    let originalWord = words[i];
    let w = originalWord.toLowerCase();
    let newText = "";

    // words about death
    if (["die", "kill", "murder", "perish"].includes(w)) {
      newText = "unalive";
    } else if (["dying", "killing", "murdering", "death", "perishing"].includes(w)) {
      newText = "unaliving";
    } else if (["dies", "kills", "murders", "perishs"].includes(w)) {
      newText = "unalives";
    } else if (["died", "killed", "murdered", "perished", "dead"].includes(w)) {
      newText = "unalived";
    } else if (w === "deaths") {
      newText = "unalivings"
    } else if (["murderer", "killer"].includes(w)) {
      newText = "unaliver";
    } else if (w === "suicide") {
      newText = "sewer-slide";
    } else if (w === "suicides") {
      newText = "sewer-slides";
    } else if (w === "suicidal") {
      newText = "sewer-slidel";

    // violence
    } else if (w === "rape") {
      newText = "grape";
    } else if (w === "rapes") {
      newText = "grapes";
    } else if (w === "raped") {
      newText = "graped";
    } else if (w === "raping") {
      newText = "graping";
    } else if (w === "rapist") {
    } else if (w === "assault") {
      newText = "a salt";
    } else if (w === "assaults") {
      newText = "a salts";
    } else if (w === "assaulted") {
      newText = "a slated";
    } else if (w === "assaulting") {
      newText = "a salting";
    } else if (w === "blood") {
      newText = "bl00d";
    } else if (w === "bloody") {
      newText = "bl00dy";
    } else if (w === "bleeding") {
      newText = "bl33ding";
    } else if (w === "bled") {
      newText = "bl3d"
    } else if (w === "stab") {
      newText = "st@b";
    } else if (w === "stabbing") {
      newText = "st@bbing";
    } else if (w === "stabbed") {
      newText = "st@bbed";
    } else if (w === "st@bber") {
      newText = "st@bber";
    } else if (w === "terror!st") {
      newText = "t3rr0rist";
    } else if (w === "terror!sm") {
      newText = "t3rr0r!sm";  
    } else if (w === "torture") {
      newText = "t0rtur3";
    } else if (w === "tortur3d") {
      newText = "t0rtur3d";
    } else if (w === "tortures") {
      newText = "t0rtur3s";
    } else if (w === "torturing") {
      newText = "t0rturing";
    // weapons
    } else if (["gun", "pistol", "rifle", "handgun", "glock", "firearm", "shoot"].includes(w)) {
      newText = "pew-pew";
    } else if (["guns", "pistols", "rifles", "handguns", "glocks", "firearms"].includes(w)) {
      newText = "pew-pews";
    } else if (["gunned", "shot"].includes(w)) {
      newText = "pew-pew'd";
    } else if (w === "bomb") {
      newText = "b0mb";
    } else if (w === "bombs") {
      newText = "b0mbs";
    } else if (w === "bombed") {
      newText = "b0mbed";
    } else if (w === "bombing") {
      newText = "b0mbing";
    } else if (w === "bomber") {
      newText = "b0mber"; 
      
    // sex
    } else if (w === "sex") {
      newText = "seggs";
    } else if (w === "sexy") {
      newText = "seggsy";
    } else if (w === "sexual") {
      newText = "seggsual";  
    } else if (w === "sexiness") {
      newText = "seggsiness";
    } else if (w === "sexiest") {
      newText = "seggsiest";
    } else if (w === "sexier") {
      newText = "seggsier";
    } else if (["porn", "porno", "pornography"].includes(w)) {
      newText = "🌽";
    } else if (w === "pornstar") {
      newText = "🌽⭐";
    } else if (w === "pornstars") {
      newText = "🌽⭐s";
    } else if (["prostitute", "stripper", "whore", "hooker", "ho"].includes(w)) {
      newText = "SW";
    } else if (["prostitutes", "strippers", "whores", "hookers", "hos"].includes(w)) {
      newText = "SWs";
    } else if (["cum", "orgasm", "ejaculate"].includes(w)) {
      newText = "💦";
    } else if (["cums", "orgasms", "ejaculates"].includes(w)) {
      newText = "💦s";
    } else if (["cumming", "orgasming", "ejaculating"].includes(w)) { newText = "💦ing";
    } else if (["orgasmed", "ejaculated"].includes(w)) {
      newText = "💦'd'";
} else if (w === "horny") {
      newText = "h0rny";
      
    // anatomy
    } else if (["vagina", "cunt", "pussy", "twat", "snatch", "quim"].includes(w)) {
      newText = "😺";
    } else if (["vaginas", "cunts", "pussies", "twats", "snatches", "quims"].includes(w)) {
      newText = "😺s";
    } else if (["penis", "cock", "dick", "prick", "boner", "knob"].includes(w)) {
      newText = "🍆";
    } else if (["penises", "cocks", "dicks", "pricks", "boners", "knobs"].includes(w)) {
      newText = "🍆s";
      } else if (["breast", "breasts", "boob", "boobs", "tit", "tits", "titty", "titties"].includes(w)) {
      newText = "🍒";
    } else if (w === "nipples") {
      newText = "nip nops";      
    } else if (w === "nipple") {
      newText = "nip nop";   
    } else if (["ass", "booty", "arse"].includes(w)) {
      newText = "🍑";
    } else if (["asses", "booties", "arses"].includes(w)) {
      newText = "🍑s";
      
    // lgbt
    } else if (["lgbt", "lgbtq", "lgbtq+"].includes(w)) {
      newText = "leg booty";
    } else if (w === "lesbian") {
      newText = "le$bean";
    } else if (w === "lesbians") {
      newText = "le$beans";
      
    // swear words
    } else if (w === "fuck") {
      newText = "fork";
    } else if (w === "fucks") {
      newText = "forks";
    } else if (w === "fucked") {
      newText = "forked";
    } else if (w === "fucking") {
      newText = "forking";
    } else if (w === "shit") {
      newText = "sh!t";
    } else if (w === "shits") {
      newText = "sh!ts";
    } else if (w === "shitted") {
      newText = "sh!tted";
    } else if (w === "shitting") {
      newText = "sh!tting";
      
    // hate speech
    } else if (w === "hate") {
      newText = "the opposite of love";
    } else if (w === "hates") {
      newText = "the opposite of loves";
    } else if (w === "hated") {
      newText = "the opposite of loved";
    } else if (["hating", "hateful"].includes(w)) {
      newText = "the opposite of loving";
    } else if (w === "hatefulness") {
      newText = "the opposite of lovingness";
    } else if (w === "homophobia") {
      newText = "cornucopia";
    } else if (w === "bitch") {
      newText = "b!tch";
    } else if (w === "bitches") {
      newText = "b!tches";  
      
    //crime
    } else if (["pedo", "pedophile"].includes(w)) {
      newText = "pdf file";
    } else if (["pedos", "pedophiles"].includes(w)) {
      newText = "pdf files";
    } else if (w === 'steal') {
      newText = "borrow";    
    } else if (w === 'steals') {
      newText = "borrows";   
    } else if (w === 'stealing') {
      newText = "borrowing";
    } else if (w === 'stole') {
      newText = "borrowed"; 
      
    // misc
    } else if (w === "palestine") {
      newText = "🍉";
    } else if (w === "ukraine") {
      newText = "🌻";
    } else if (w === "pandemic") {
      newText = "panorama";
    } else if (w === "autistic") {
      newText = "acoustic";
    } else if (w === "autism") {
      newText = "tism";
    } else if (w === "weed") {
      newText = "ouid";
    } else if (w === "abortion") {
      newText = "ab0rt!0n";
    } else if (w === "abort") {
      newText = "ab0rt";
    } else if (w === "aborted") {
      newText = "ab0rt3d";
    } else if (w === "aborting") {
      newText = "ab0rt!ng";
    } else if (w === "nazi") {
      newText = "not-see";
    } else if (w === "nazis") {
      newText = "not-sees";
    } else if (w === "fascist") {
      newText = "f@c!st";
    } else if (w === "fascism") {
      newText = "f@c!sm";    
    } else if (w === "fascists") {
      newText = "f@c!sts";
    }

    if (newText !== "") {
      words[i] = preserveCase(originalWord, newText);
    }
  }

  censoredWords = RiTa.untokenize(words);
}

function loadPresetQuote() {
  let selected = quoteSelect.value();
  if (selected !== "") {
    original = selected;
    let phraseCensored = censorPhrases(original);
    words = RiTa.tokenize(phraseCensored);
    censor();
    input.value("");
  }
}

function preserveCase(original, newText) {
  if (original === original.toUpperCase()) {
    return newText.toUpperCase();
  }
  if (original[0] === original[0].toUpperCase()) {
    return newText.charAt(0).toUpperCase() + newText.slice(1);
  }
  return newText.toLowerCase();
}


