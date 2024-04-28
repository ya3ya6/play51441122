import { LandingModel } from '@/model/LandingPage';
import { Container, Grid } from '@chakra-ui/react';
import { FunctionComponent, useState } from 'react';
import AttributeBox from './AttributeBox/AttributeBox';

type AttributeListProps = Pick<LandingModel, 'attribute' | 'gradient' | 'color'>;

const AttributeList: FunctionComponent<AttributeListProps> = ({ attribute, gradient, color }) => {
  const [activeIndex, setActiveIndex] = useState(2);
  return (
    <Container mb="100px" maxW="container.xl">
      <Grid
        gap="40px"
        gridTemplateColumns={{
          base: '100%',
          sm: '1fr 1fr',
          md: '1fr 1fr 1fr',
          lg: '1fr 1fr 1fr 1fr',
        }}
      >
        {attribute.map(({ icon, id, text, title }) => (
          <AttributeBox
            key={id}
            id={Number(id)}
            gradient={gradient}
            text={text}
            title={title}
            color={color}
            icon={icon}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default AttributeList;
