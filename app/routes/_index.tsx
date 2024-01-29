import type { MetaFunction } from "@remix-run/node";
import React from "react";

import Header from "~/components/Header";
import Navbar from "~/components/Navbar";
import Card from "~/components/Card";
import Emphasis from "~/components/Emphasis";

const DONOR_FIRST_NAMES = [
  "Emily",
  "Jamal",
  "Sophia",
  "Elijah",
  "Mia",
  "Diego",
  "Olivia",
  "Aiden",
  "Isabella",
  "Amir",
  "Ava",
  "Juan",
  "Emma",
  "Malik",
  "Zoe",
  "Grace",
  "David",
  "Maya",
  "Jayden",
  "Naomi",
  "Carlos",
  "Lily",
  "Kai",
  "Chloe",
  "Jasmine",
  "Lucas",
  "Layla",
  "Fatima",
  "Caleb",
  "Aaliyah",
  "Ethan",
  "Sarah",
  "Liam",
  "Leila",
  "Omar",
  "Madison",
  "Benjamin",
  "Amelia",
  "Xavier",
  "Harper",
  "Ruby",
  "Adrian",
  "Eliana",
  "Gabriela",
  "Tyler",
  "Abigail",
  "Jose",
  "Kayla",
  "Leah",
  "Jaden",
  "Ryan",
  "Sofia",
  "Asha",
  "Mateo",
  "Hannah",
  "Avery",
  "Jacob",
  "Muhammad",
  "Evelyn",
  "Dylan",
  "Ayana",
  "Logan",
  "Taylor",
  "Levi",
  "Savannah",
  "Kaden",
  "Natalia",
  "Esmeralda",
  "Alex",
  "Sydney",
  "Alejandro",
  "Victoria",
  "Giselle",
  "Noah",
  "Isla",
  "Liam",
  "Elena",
  "Jaxon",
  "Zoey",
  "Nathan",
  "Ana",
  "Justin",
  "Clara",
  "Maya",
  "Aidan",
  "Mia",
  "Josiah",
  "Laila",
  "Sofia",
  "Muhammad",
  "Ava",
  "Evelyn",
  "Santiago",
  "Eliana",
  "Isabella",
  "Aaron",
  "Nora",
  "Lucas",
  "Amara",
  "Layla",
];

const DONOR_LAST_NAMES = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const meta: MetaFunction = () => {
  return [
    { title: "Todd Goates for President" },
    {
      name: "description",
      content:
        "Todd Goates is now 35 years old, therefore he is running for President of the United States of America",
    },
  ];
};

export default function Index() {
  const [email, setEmail] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [amount, setAmount] = React.useState<string>("10");
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [donorName, setDonorName] = React.useState<string>("");
  const [donationAmount, setDonationAmount] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const randomFirst =
        DONOR_FIRST_NAMES[Math.floor(Math.random() * DONOR_FIRST_NAMES.length)];
      const randomAmount = Math.floor(Math.random() * 1000);
      const randomLast =
        DONOR_LAST_NAMES[Math.floor(Math.random() * DONOR_LAST_NAMES.length)];

      setDonorName(`${randomFirst} ${randomLast}.`);
      setDonationAmount(randomAmount);
    }, 1500);
    return () => clearInterval(interval);
  });

  function playSong() {
    const audio = new Audio("anthem.mp3");
    audio.play();
    setIsPlaying(true);
  }

  return (
    <div className="bg-gradient-to-br from-blue-700 to-red-600">
      <Header />
      <Navbar />
      <main className="container mx-auto p-4 space-y-10">
        <div className="grid md:grid-cols-4 md:gap-12">
          <div className="mb-10">
            <Card>
              <img src="todd.png" alt="Todd Goates looking presidential" />
              <div className="text-center mt-4">
                {isPlaying ? (
                  <button
                    onClick={() => {
                      alert("No, nobody can stop Jimi");
                    }}
                    className="text-blue-700 font-semibold"
                  >
                    Stop the music!!
                  </button>
                ) : (
                  <button
                    onClick={playSong}
                    className="text-blue-700 font-semibold"
                  >
                    Play a patriotic tune
                  </button>
                )}
              </div>
            </Card>
          </div>

          <div className="md:col-span-3 space-y-10">
            <Card>
              <h2 className="text-2xl font-semibold mb-4" id="about">
                About Todd Goates's{" "}
                <span className="text-sm text-gray-500">(is that right?)</span>{" "}
                political ambitions
              </h2>
              <div className="text-lg space-y-4">
                <p>
                  Having recently turned 35 years of age and being a natural
                  born citizen of this great nation, I declare that I am running
                  to be the{" "}
                  <Emphasis>President of the United States of America</Emphasis>
                  !
                </p>
                <p>
                  While I have traveled to several other countries around the
                  world, I am fond of this particular bit of land that I was
                  born on, therefore I have a desire to{" "}
                  <span className="line-through decoration-red-500">rule</span>{" "}
                  lead it into a new era of prosperity.
                </p>
                <p>
                  I'm also launching{" "}
                  <Emphasis>
                    a brand new political party called the GOAT Party
                  </Emphasis>
                  . You may think that's an acronym for Greatest Of All Time,
                  and you'd be correct... but it also stands for Government of
                  American Teamwork. Our color is green because that's Todd's
                  favorite color and our mascot is a goat because Todd's last
                  name is Goates.
                </p>
                <div className="text-center py-10">
                  <a
                    href="https://youtu.be/SIaFtAKnqBU?si=tihsrIWZ-ccDd1IQ"
                    target="_blank"
                    className="bg-blue-500 px-3 py-2 text-white font-semibold rounded hover:bg-blue-700"
                  >
                    Learn more about the GOAT Party
                  </a>
                </div>
                <p>Keep on scrollin' to learn more about my platform!</p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-semibold mb-4" id="policies">
                Todd's Policies for the Nation
              </h2>
              <div className="text-lg space-y-4 mb-8">
                <p>
                  Here are some of the things Todd Goates will deliver on day
                  one of his presidency:
                </p>
                <ul className="list-disc pl-4">
                  <li>
                    I will have brought peace, freedom, justice, and security to
                    my new Empire.
                  </li>
                  <li>
                    I will have unlimited power and the ability to save those I
                    love from dying.
                  </li>
                  <li>
                    I will have brought balance to the Force, not leaving it in
                    darkness.
                  </li>
                  <li>
                    I will build a new space station that will be the ultimate
                    power.
                  </li>
                  <li>I will be the senate.</li>
                </ul>
                <p className="text-xs text-gray-400">
                  Wait, did I just copy and paste various plot points from Star
                  Wars? Maybe I'll update this part later.
                </p>
              </div>
              <hr />
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                What are people saying about Todd?
              </h2>
              <div className="text-lg space-y-4">
                <p>
                  "Todd is a great guy. I've known him for years and he's always
                  had my back." - Guy Incognito
                </p>
                <p>
                  "He's better than the other guys running for president." -
                  Steve Harmon
                </p>
                <p>
                  "Todd is the best. I'm not just saying that because he's my
                  husband." - Todd's wife
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-semibold mb-8" id="shop">
                Can you imagine a shirt that says Todd?
              </h2>
              <div className="flex justify-center items-start mb-10 m-auto">
                <div className="border border-gray-700 border-r-0 size-16"></div>
                <div className="flex flex-col gap4 border border-gray-700">
                  <img
                    src="/goat-logo.svg"
                    alt="Goat Logo"
                    className="bg-white p-4 size-48"
                  />
                  <h3 className="text-2xl font-semibold text-center">Todd</h3>
                </div>
                <div className="border border-gray-700 border-l-0 size-16"></div>
              </div>
              <p>
                We are in the process of setting up our e-commerce store. Fill
                out the form below to find out when the latest merch has
                dropped.
              </p>
              {message ? (
                <p className="text-gray-500 text-center italic my-10">
                  {message}
                </p>
              ) : (
                <div className="my-10">
                  <input
                    type="email"
                    placeholder="vicki_voter@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full md:max-w-[400px] rounded p-1 border border-gray-400 ring-0 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="text-center md:text-left my-8">
                    <button
                      onClick={() => {
                        setEmail("");
                        setMessage(
                          "Thanks for signing up! We can't wait for you to buy our shirt, mugs, stickers, and other swag!"
                        );
                      }}
                      className="bg-blue-500 px-3 py-2 text-white font-semibold rounded hover:bg-blue-700"
                    >
                      Notify me about the merch!
                    </button>
                  </div>
                </div>
              )}
            </Card>

            <Card>
              <h2 className="text-2xl font-semibold mb-4" id="donate">
                Donate to the cause!
              </h2>
              <div className="text-lg space-y-4">
                <p>
                  As you know, campaigns are expensive. If you want a regular
                  person like me to win the white house, we're gonna need to
                  make a lot of money... like seriously. Tons!
                </p>
                <div className="text-center my-8">
                  <button
                    className="bg-blue-500 px-3 py-2 text-white font-semibold rounded hover:bg-blue-700"
                    onMouseOver={() => setAmount("10,000")}
                    onMouseOut={() => setAmount("10")}
                    onClick={() => {
                      alert(
                        "Sorry, our web team hasn't finished setting up our payment portal yet. The lousy bums! In the mean time you can send us a check to PO Box 41189, Spanish Fork, UT 84660. Thanks for the monies."
                      );
                    }}
                  >
                    Donate ${amount}
                  </button>
                </div>
                <p>
                  Tons of people are donating to Todd's campaign. Check out our{" "}
                  <Emphasis>live feed</Emphasis> below!
                </p>
              </div>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mb-4">
                Money money money!
              </h2>
              <div className="text-lg space-y-4">
                <p>
                  <span className="font-semibold">{donorName}</span> just
                  donated{" "}
                  <span className="font-semibold">${donationAmount}</span> to
                  Todd's campaign!
                </p>
                <p>
                  These are <Emphasis>real people</Emphasis> who want to see{" "}
                  <Emphasis>real change</Emphasis> in this country. Trust me,
                  they are real!
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-semibold mb-4">In conclusion</h2>
              <div className="text-lg space-y-4">
                <p>
                  If you want those fat cats in Washington to stop taking
                  advantage of the little guy, then vote for{" "}
                  <Emphasis>Todd Goates for President!</Emphasis>
                </p>
                <p>And if I so happen to lose the 2024 election, that's ok!</p>
                <p>
                  I can always run again in 2028, 2032, 2036, 2040, 2044, 2048,
                  2052, 2056, 2060, 2064, 2068, 2072, 2076, 2082, 2086, or 2090.
                </p>
                <p>
                  Because the older I get, the greater my odds are at winning
                  the election!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-blue-950 text-center text-white mt-20">
        <div className="container p-4">
          <p className="text-sm">
            My name is Todd Goates and I approve of this website.
          </p>
        </div>
      </footer>
    </div>
  );
}
