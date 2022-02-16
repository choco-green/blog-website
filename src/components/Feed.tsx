import { loremIpsum, ILoremIpsumParams } from "lorem-ipsum";
import faker from "minifaker";
import "minifaker/locales/en";
import { ReactElement, useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { RandomPicture } from "random-picture";

function Feed() {
    const [ Image, setImage ] = useState<string[]>([]);
    const amountOfFakeCards = 10;
    const params: ILoremIpsumParams = { count: 10, units: "sentence" };


    useEffect(() => {
        async function getImages() {
            let Images: string[] = [];
            for (let i = 0; i < amountOfFakeCards * 2; i++) {
                Images.push((await RandomPicture()).url);
            }
            setImage(Images);
        }

        getImages();
    }, []);

    /**
     * Human-readable elapsed or remaining time (example: 3 minutes ago)
     * @param  {Date|Number|String} date A Date object, timestamp or string parsable with Date.parse()
     * @return {string} Human readable elapsed or remaining time
     * @see https://stackoverflow.com/a/67338038/938822
     */
    function fromNow(date: string | number | Date): string {
        const SECOND = 1000;
        const MINUTE = 60 * SECOND;
        const HOUR = 60 * MINUTE;
        const DAY = 24 * HOUR;
        const WEEK = 7 * DAY;
        const MONTH = 30 * DAY;
        const YEAR = 365 * DAY;
        const units = [
            {
                max: 30 * SECOND,
                divisor: 1,
                past1: "just now",
                pastN: "just now",
                future1: "just now",
                futureN: "just now",
            },
            {
                max: MINUTE,
                divisor: SECOND,
                past1: "a second ago",
                pastN: "# seconds ago",
                future1: "in a second",
                futureN: "in # seconds",
            },
            {
                max: HOUR,
                divisor: MINUTE,
                past1: "a minute ago",
                pastN: "# minutes ago",
                future1: "in a minute",
                futureN: "in # minutes",
            },
            {
                max: DAY,
                divisor: HOUR,
                past1: "an hour ago",
                pastN: "# hours ago",
                future1: "in an hour",
                futureN: "in # hours",
            },
            {
                max: WEEK,
                divisor: DAY,
                past1: "yesterday",
                pastN: "# days ago",
                future1: "tomorrow",
                futureN: "in # days",
            },
            {
                max: 4 * WEEK,
                divisor: WEEK,
                past1: "last week",
                pastN: "# weeks ago",
                future1: "in a week",
                futureN: "in # weeks",
            },
            {
                max: YEAR,
                divisor: MONTH,
                past1: "last month",
                pastN: "# months ago",
                future1: "in a month",
                futureN: "in # months",
            },
            {
                max: 100 * YEAR,
                divisor: YEAR,
                past1: "last year",
                pastN: "# years ago",
                future1: "in a year",
                futureN: "in # years",
            },
            {
                max: 1000 * YEAR,
                divisor: 100 * YEAR,
                past1: "last century",
                pastN: "# centuries ago",
                future1: "in a century",
                futureN: "in # centuries",
            },
            {
                max: Infinity,
                divisor: 1000 * YEAR,
                past1: "last millennium",
                pastN: "# millennia ago",
                future1: "in a millennium",
                futureN: "in # millennia",
            },
        ];
        const diff = Date.now() - (typeof date === "object" ? date :
                                   new Date(date)).getTime();
        const diffAbs = Math.abs(diff);
        for (const unit of units) {
            if (diffAbs < unit.max) {
                const isFuture = diff < 0;
                const x = Math.round(Math.abs(diff) / unit.divisor);
                if (x <= 1) return isFuture ? unit.future1 : unit.past1;
                return (isFuture ? unit.futureN : unit.pastN).replace("#",
                    x.toString());
            }
        }
        return "";
    }

    function renderCards(amountOfCards: number) {
        let cards: ReactElement<BlogCard>[] = [];

        for (let i = 0; i < amountOfCards; i++) {
            cards.push(<BlogCard
                Username={ faker.name() }
                UserImage={ Image[i] }
                image={ Image[i + amountOfCards] }
                title={ loremIpsum(params) }
                time={ fromNow(faker.date()) }
                description={ loremIpsum(params) }
            />);
        }
        return cards;
    }

    return (
        <div className="flex flex-col border-gray-200
                        m-1 p-5 lg:border-r-2 lg:border-l-2"
        >
            { renderCards(amountOfFakeCards).map((card, _index) => {
                return <>{ card }</>;
            }) }
        </div>

    );
}

export default Feed;