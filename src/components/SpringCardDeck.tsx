/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable implicit-arrow-linebreak */
import { DeckCard } from 'constants/AboutMe';
import { useState } from 'react';
import { useSprings, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-use-gesture';

interface SpringCardDeckProps {
  cards: DeckCard[];
  renderCard: any;
}
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r: number, s: any) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const SpringCardDeck = (props: SpringCardDeckProps) => {
  const { cards, renderCard } = props;
  const [gone] = useState<any>(() => new Set());
  const [springProps, set] = useSprings(cards.length, (i: number) => ({
    ...to(i),
    from: from(),
  }));

  const bind = useGesture({
    onDrag: ({
      args: [index],
      down,
      delta: [xDelta],
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      set((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: {
            friction: 50,
            tension: down ? 800 : isGone ? 200 : 500,
          },
        };
      });
      if (!down && gone.size === cards.length) {
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
      }
    },
  });

  return (
    <>
      {springProps.map(({ x, y, rot, scale }, i) => (
        <animated.div
          key={i}
          className="absolute top-0 left-0 w-full h-full will-change-transform flex items-center justify-center"
          style={{
            transform: interpolate(
              [x, y],
              // eslint-disable-next-line no-shadow
              (x, y) => `translate3d(${x}px,${y}px,0)`
            ),
          }}
        >
          <animated.div
            {...bind(i)}
            className="drop-shadow-2xl bg-gray-200 h-[30rem] w-[20rem] bg-auto will-change-transform rounded-lg shadow-lg cursor-move"
            style={{
              transform: interpolate([rot, scale], trans),
            }}
          >
            {renderCard(cards[i])}
          </animated.div>
        </animated.div>
      ))}
    </>
  );
};

export default SpringCardDeck;
