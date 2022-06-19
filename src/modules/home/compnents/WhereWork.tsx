import SectionTitle from '@components/shared/SectionTitle';
import SpringCardDeck from '@components/SpringCardDeck';
import Text from '@components/shared/Text';
import Avatar from '@components/shared/Avatar';
import NextLink from '@components/shared/Link';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { workDock, DeckCard } from 'constants/AboutMe';

const WhereWorkCard = ({ card }: { card: DeckCard }) => (
  <div className="flex flex-col justify-center items-center p-12 gap-4">
    <div className="flex flex-col">
      <Text text={card.title} variant="h3" customClass="text-black" />
      <Text text={card.subtitle} variant="p" customClass="text-black" />
    </div>
    <div className="flex items-center gap-4">
      <Text text={card.startDate} />
      <Text text="to" />
      <Text text={card.endDate} />
    </div>
    {card.image && (
      <Avatar
        src={card.image}
        alt={card.title}
        width="w-28"
        imageClass="object-contain"
      />
    )}
    <Text text={card.description} />

    <NextLink
      href={card.link}
      label={`Get into ${card.title}`}
      customClass="btn btn-info"
    />
  </div>
);

const WhereWork = () => (
  <div className="flex flex-col gap-4">
    <SectionTitle index="02" label="Where I've worked" />
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4 justify-center">
        <AiOutlineArrowLeft />
        <Text text="Drag Left or Right" />
        <AiOutlineArrowRight />
      </div>
      <div className="flex  items-center justify-center relative h-[30rem]">
        <SpringCardDeck
          cards={workDock}
          renderCard={(card: DeckCard) => <WhereWorkCard card={card} />}
        />
      </div>
    </div>
  </div>
);

export default WhereWork;
