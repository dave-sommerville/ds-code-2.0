import { motion } from 'framer-motion';
import { FaBook } from 'react-icons/fa6';
import '../css/pages/partial-pages.css';
import { Helmet } from 'react-helmet';
function Releases() {
  return(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <section className="releases-wrapper">
        <h2>Releases</h2>
        <article>
          <figure>
            <img src="https://dave-sommerville.github.io/ds-code-releases/img/dungeongif.gif" className="eyeframe" alt="Dungeons of Draegmor preview" />
          </figure>
          <div className="release-text">
            <h4>Dungeons of Draegmor <span className="orange-text">Beta</span></h4>
            <p>Text Based Console App</p>
            <p>
              <a
                href="https://dave-sommerville.github.io/ds-code-releases/dungeon-readme.html"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <FaBook></FaBook>
              </a>
            </p>
            <p>
              <a
                href="https://dave-sommerville.github.io/ds-code-releases/Releases/dungeon-adventurers-pack.zip"
                >
                Download Zip
              </a>
            </p>
            <p>
              <a
                href="https://github.com/dave-sommerville/Dungeon_Crawler"
                className="hover"
                >
                View Repo
              </a>
            </p>
          </div>
        </article>
        <article>
          <figure>
            <img src="https://dave-sommerville.github.io/ds-code-releases/img/blackjackgif.gif" className="eyeframe" alt="Blackjack animation preview" />
          </figure>
          <div className="release-text">
            <h4>The Deck</h4>
            <p>Open Source JavaScript object with SVG resource</p>
            <p>

            <a
              href="https://dave-sommerville.github.io/ds-code-releases/Releases/public-deck.zip"
              >
              Download Zip
            </a>
              </p>
              <p>

            <a
              href="https://github.com/dave-sommerville/the-deck"
              >
              View Repo
            </a>
              </p>
          </div>
        </article>
        <article>
          <div className="w-100 release-text">
            <h4>Haunted House Console App</h4>
            <p>My first experience with C# console text games.</p>
            <p>
              <a
                href="https://dave-sommerville.github.io/ds-code-releases/Releases/Haunted-House.zip"
                >
                Download Zip
              </a>
            </p>
            <p>
              <a
                href="https://github.com/dave-sommerville/haunted-house"
                >
                View Repo
              </a>
            </p>
          </div>
        </article>
      </section>
    </motion.div>
  );
}
export default Releases;