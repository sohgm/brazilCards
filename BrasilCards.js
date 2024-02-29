
import React from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const BrazilCards = () => {
  const navigation = useNavigation();

  const cards = [
  
    {
      image: require('./assets/rio.jpg'),
      title: 'Rio de Janeiro',
      description: 'O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor, no topo do Corcovado, e pelo Pão de Açúcar, um pico de granito com teleféricos até seu cume. A cidade também é conhecida pelas grandes favelas. O empolgante Carnaval, com carros alegóricos, fantasias extravagantes e sambistas, é considerado o maior do mundo.'
    },
    {
      image: require('./assets/sao-paulo.jpg'),
      title: 'São Paulo',
      description: 'São Paulo, centro financeiro do Brasil, está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica. Há prédios simbólicos como a catedral neogótica, o Edifício Martinelli, um arranha-céu inaugurado em 1929, e o Edifício Copan, com suas linhas curvas projetadas pelo arquiteto modernista Oscar Niemeyer. A igreja em estilo colonial do Pátio do Colégio marca o local onde os padres jesuítas fundaram a cidade em 1554.'
    },
    {
      image: require('./assets/foz.jpg'),
      title: 'Foz do Iguaçu',
      description: 'Foz do Iguaçu, cidade no estado brasileiro do Paraná, é a principal base para visitar as famosas Cataratas do Iguaçu, uma das maiores cachoeiras do mundo. Com uma extensão de 2,7 km e atravessando a fronteira com a Argentina, as cataratas são formadas por centenas de cascatas, entre elas a Garganta do Diabo, com 80 m de altura. Passeios em barcos infláveis durante os quais os turistas ficam encharcados são uma forma muito comum de apreciar esse espetáculo natural.'
    },
    {
      image: require('./assets/floresta.jpg'),
      title: 'Floresta Amazônica',
      description: 'A floresta tropical amazônica, que cobre boa parte do noroeste do Brasil e se estende até a Colômbia, o Peru e outros países da América do Sul, é a maior floresta tropical do mundo, famosa por sua biodiversidade. Ela é atravessada por milhares de rios, entre eles o grandioso rio Amazonas. Entre as cidades ribeirinhas, com arquitetura do século XIX que data do início da exploração de borracha, destacam-se Manaus e Belém, no Brasil, e Iquitos e Puerto Maldonado, no Peru.'
    },
    {
      image: require('./assets/buzios.jpg'),
      title: 'Buzios',
      description: 'Armação dos Búzios (ou Búzios), é uma estância brasileira situada numa península oceânica a este do Rio de Janeiro. É conhecida como um sofisticado destino de férias com inúmeras praias. Estas incluem Ferradura, numa calma baía em forma de ferradura com desportos aquáticos, e Geribá, um local de surf popular. Entre as ruas da vila, a Rua das Pedras, calcetada, é um centro de restauração e de vida noturna. '
    },
    {
      image: require('./assets/salvador.jpg'),
      title: 'Salvador',
      description: 'Salvador, a capital do estado da Bahia no nordeste do Brasil, é conhecida pela arquitetura colonial portuguesa, pela cultura afrobrasileira e pelo litoral tropical. O bairro do Pelourinho é seu coração histórico, com vielas de paralelepípedo terminando em praças grandes, prédios coloridos e igrejas barrocas, como São Francisco, com trabalhos em madeira revestidos com ouro.'
    },
    {
      image: require('./assets/pantanal.jpg'),
      title: 'Pantanal',
      description: 'O Complexo do Pantanal, ou simplesmente Pantanal, é um bioma constituído principalmente por uma savana estépica, alagada em sua maior parte, com 250 000 quilômetros quadrados de extensão e uma altitude média de 100 m.'
    },
    {
      image: require('./assets/olinda.jpg'),
      title: 'Olinda',
      description: 'Olinda é uma cidade colonial na costa nordeste do Brasil, perto da cidade do Recife. Fundada em 1535 pelos portugueses, foi construída em encostas íngremes e distingue-se pela arquitetura do século XVIII, com igrejas barrocas, conventos, mosteiros e casas de cores vivas. Originalmente um centro da indústria da cana-de-açúcar, é agora conhecida como uma colónia de artistas, com diversas galerias, oficinas e museus.'
    }
  ];

  const handleCardPress = (location) => {
    navigation.navigate('LocationDetails', { location });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.column}>
        {cards.slice(0, 4).map((card, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => handleCardPress(card)}>
            <Image source={card.image} style={styles.cardImage} resizeMode="cover" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardDescription}>{card.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.column}>
        {cards.slice(4, 8).map((card, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => handleCardPress(card)}>
            <Image source={card.image} style={styles.cardImage} resizeMode="cover" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardDescription}>{card.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10, // Margem entre as colunas
  },
  card: {
    width: (windowWidth - 40) / 2, // Largura dos cards ajustada para duas colunas
    height: 180,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '70%',
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
  },
});

export default BrazilCards;