import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_268_980} />
      <View style={styles.View_268_982}>
        <Text style={styles.Text_268_982}>Payment Completed</Text>
      </View>
      <View style={styles.View_268_34}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f1b/33de/a61edcc5cfb28193d673faaf2825ddee"
          }}
          style={styles.ImageBackground_268_35}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4741/a91b/ada279295739ffca5c5783669b95dc3a"
          }}
          style={styles.ImageBackground_268_36}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fec2/0d31/83fc113c3abf9889334ebd1618e3b1e6"
          }}
          style={styles.ImageBackground_268_37}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a24c/495a/341aad441881d9cebcb7f13fd644febf"
          }}
          style={styles.ImageBackground_268_38}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c3/ca70/9ae0eb92950a6c93cbb64de4fe371404"
          }}
          style={styles.ImageBackground_268_39}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3bf/95e0/12a4c91b35fb54f8d8e4d0d629b148e6"
          }}
          style={styles.ImageBackground_268_40}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ff7/8dfc/1ab716b1047e4eef957ff6a48768268f"
          }}
          style={styles.ImageBackground_268_41}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eab/a475/d1bc37d82072ddecd35155aa51a45a89"
          }}
          style={styles.ImageBackground_268_42}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c60f/1dd5/92dd1d932c7eb29dd6cecd8dae3e142e"
          }}
          style={styles.ImageBackground_268_43}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/944b/5ec9/97dc00732454120ffd55e15bd3646e43"
          }}
          style={styles.ImageBackground_268_44}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc1a/e55d/14d60dc726e2876f968ae6bc1349ecdd"
          }}
          style={styles.ImageBackground_268_45}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a31/c569/6364c82d6b1288a07d210c6b287ce35c"
          }}
          style={styles.ImageBackground_268_46}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d031/9468/1e8d96b2b8e26a7879fe574b39d4baf4"
          }}
          style={styles.ImageBackground_268_47}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9344/03fe/820a3594188da83f20cf72407da79276"
          }}
          style={styles.ImageBackground_268_48}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4d/8d2d/634a55038ec3f07734c5f345e6a0c62f"
          }}
          style={styles.ImageBackground_268_49}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a94/86c3/1f85e19c7aac59abb605a8a3bd148f86"
          }}
          style={styles.ImageBackground_268_50}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3aa/a668/a359313f2fb01256b01264ac7e20ad4c"
          }}
          style={styles.ImageBackground_268_51}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/053f/7e4b/e45adc8ca1f0f107bcb1462e02abdc6a"
          }}
          style={styles.ImageBackground_268_52}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/110c/5479/f4894dd9f234569d812e9e6bed7f0ee8"
          }}
          style={styles.ImageBackground_268_53}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2b4/7fd4/be1fdffa79e8de6092c1d445d55cbbcd"
          }}
          style={styles.ImageBackground_268_54}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527c/fdd4/76a0e15c6a7243fe6069b53d4a1e1799"
          }}
          style={styles.ImageBackground_268_55}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/432b/c081/3815630f8c7688dbdbf10525a3595876"
          }}
          style={styles.ImageBackground_268_56}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccc3/4b25/922a5eb4e5aae45a19f30b7a06f1593e"
          }}
          style={styles.ImageBackground_268_57}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/489c/46db/53dfd5adacf35508dd7e7dd3c540d50a"
          }}
          style={styles.ImageBackground_268_58}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d16d/915f/8796231a5b617ad1c41b4ffdf9a83872"
          }}
          style={styles.ImageBackground_268_59}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a33b/5aa4/0f219e15ef0a7eaa8faeca6c9483dfbb"
          }}
          style={styles.ImageBackground_268_60}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4875/9cb6/d777c4c8916f794c3585e86b3750f898"
          }}
          style={styles.ImageBackground_268_61}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/700c/e512/daaea84d411e40d5fcc3d23de0d5149f"
          }}
          style={styles.ImageBackground_268_62}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fe8/a3df/fc66bb70be5b17f108697ea9423d568f"
          }}
          style={styles.ImageBackground_268_63}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0606/dc5d/71b482e17b46de326f2d2b4fa5629b2c"
          }}
          style={styles.ImageBackground_268_64}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56b6/1e24/c24cb08ee6b14962236d451db4aba8cf"
          }}
          style={styles.ImageBackground_268_65}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/385d/3011/1babd7b8db6efed3bef990c57d45fd89"
          }}
          style={styles.ImageBackground_268_66}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a66/f2ca/36f6d1aaea8ad551d5673846df364515"
          }}
          style={styles.ImageBackground_268_67}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d44/df6b/2e0d7e36b42b75f8d9959a2c0f00869d"
          }}
          style={styles.ImageBackground_268_68}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ba3/7c72/1bb99dfc24914c702e68a9f65a4af004"
          }}
          style={styles.ImageBackground_268_69}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c6/01e8/d10f9f05c568a14369ce4fee3fb108e8"
          }}
          style={styles.ImageBackground_268_70}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d78/6df1/2ebd09f84affeedfd55e2f6368eea14d"
          }}
          style={styles.ImageBackground_268_71}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3194/9bf1/c5866210767218145ab3c12d42386071"
          }}
          style={styles.ImageBackground_268_72}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51e5/f898/f75a794bca05b6ef39fb5326ae06a7ac"
          }}
          style={styles.ImageBackground_268_73}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55a3/7b55/69e5f5f40bcb8328c93161c59f7aabe6"
          }}
          style={styles.ImageBackground_268_74}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0777/e251/bfdd1dc2bcf370f5edaa6d6589a6f3a6"
          }}
          style={styles.ImageBackground_268_75}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4d/8d2d/634a55038ec3f07734c5f345e6a0c62f"
          }}
          style={styles.ImageBackground_268_76}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38ab/9f13/5594bd6d9ce1bff8e12e81a4e498784e"
          }}
          style={styles.ImageBackground_268_77}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9b8/1881/3c2c1796155273cdc1a978f11f9422f1"
          }}
          style={styles.ImageBackground_268_78}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76bb/84a6/e6789e3be02fffa7ee2107c98658e86c"
          }}
          style={styles.ImageBackground_268_79}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ed1/8972/ce2f1e905c0d9b1d660dc0ff9aa0590c"
          }}
          style={styles.ImageBackground_268_80}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb96/ba0b/cb03be2fa4c974687e3310224f022383"
          }}
          style={styles.ImageBackground_268_81}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90c8/cbf4/895cc52b3d0828bc99d0de8bf2d79330"
          }}
          style={styles.ImageBackground_268_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8ee/8851/331041c0849762b303886f007d49c970"
          }}
          style={styles.ImageBackground_268_83}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bdc/e6ed/cf8c124311022fafa8aa45f65d1a3595"
          }}
          style={styles.ImageBackground_268_84}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e82/9833/932ca94e01fbcdd33ed3d640d4e3aee1"
          }}
          style={styles.ImageBackground_268_85}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a26/5f6a/5d4fd4c0e4e19747dd2eb7b9cd3c4efd"
          }}
          style={styles.ImageBackground_268_86}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fca/5455/a12fccb540214cfe9ecbc8faf9362a18"
          }}
          style={styles.ImageBackground_268_87}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d897/d694/61da3f1d307b7a31ed208fb57ad8bdcc"
          }}
          style={styles.ImageBackground_268_88}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48c7/d7dd/672a4caa07620ef8cfcfadf5731c729f"
          }}
          style={styles.ImageBackground_268_89}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74bc/b6bd/13bcbd70c45a6a25761f04456ed74d22"
          }}
          style={styles.ImageBackground_268_90}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74bc/b6bd/13bcbd70c45a6a25761f04456ed74d22"
          }}
          style={styles.ImageBackground_268_91}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74bc/b6bd/13bcbd70c45a6a25761f04456ed74d22"
          }}
          style={styles.ImageBackground_268_92}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74bc/b6bd/13bcbd70c45a6a25761f04456ed74d22"
          }}
          style={styles.ImageBackground_268_93}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74bc/b6bd/13bcbd70c45a6a25761f04456ed74d22"
          }}
          style={styles.ImageBackground_268_94}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74bc/b6bd/13bcbd70c45a6a25761f04456ed74d22"
          }}
          style={styles.ImageBackground_268_95}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74bc/b6bd/13bcbd70c45a6a25761f04456ed74d22"
          }}
          style={styles.ImageBackground_268_96}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74bc/b6bd/13bcbd70c45a6a25761f04456ed74d22"
          }}
          style={styles.ImageBackground_268_97}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a46f/d60d/0e882666d52316d9d1b43fb5d1386242"
          }}
          style={styles.ImageBackground_268_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ff/0bac/70934aea45fb720b14b495abb1f2c73b"
          }}
          style={styles.ImageBackground_268_99}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5a4/0293/bb864fe226dceefe0740b193f5e7807a"
          }}
          style={styles.ImageBackground_268_100}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4e4/67b5/061cea9099d402ed1a09052aff50ada2"
          }}
          style={styles.ImageBackground_268_101}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84fd/34f3/e8d4011675f1cd11a2ea779b97818b4a"
          }}
          style={styles.ImageBackground_268_102}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c91d/77b7/3f562c4fa9fb6f2b6a46891f05967dc0"
          }}
          style={styles.ImageBackground_268_103}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa3/06f7/d84bcdad97180624cab645aa97db777a"
          }}
          style={styles.ImageBackground_268_104}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07d7/fb4d/e7fe0c4dcb752954b37ca59e2f0abc61"
          }}
          style={styles.ImageBackground_268_105}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e231/babf/8f589c4fcd8eef725255d5aebddfdf08"
          }}
          style={styles.ImageBackground_268_106}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e733/85c3/cf819a574c65a8dc5d00adcd0bb93919"
          }}
          style={styles.ImageBackground_268_107}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c24/a960/c74201070746711ca94fb140ede0192d"
          }}
          style={styles.ImageBackground_268_108}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d7e/16c8/9294a14a7e410d71d0f4e203ff3e8ab9"
          }}
          style={styles.ImageBackground_268_109}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08f9/9ae6/775a03523fd7f55177691cb2208b6c68"
          }}
          style={styles.ImageBackground_268_110}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba04/0868/2cdc49463be65fba6fef9dbedc14f673"
          }}
          style={styles.ImageBackground_268_111}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e51/bd58/697d7d43a8c53b5859a289e05995af8b"
          }}
          style={styles.ImageBackground_268_112}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d44/2d7f/b92b75af1fb17222db4c517a2c4baf38"
          }}
          style={styles.ImageBackground_268_113}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f72b/0332/fbb02ddc151510785c4ee7bc30f079ed"
          }}
          style={styles.ImageBackground_268_114}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3f1/da3d/5b1e8e4eae953de3bb29a97cd30bf207"
          }}
          style={styles.ImageBackground_268_115}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2c3/9538/de2c72bbdb862c198faa055f3b0f3059"
          }}
          style={styles.ImageBackground_268_116}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd4b/57a9/51d35b36aa13e73567b32387c79366e3"
          }}
          style={styles.ImageBackground_268_117}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b2/39c0/539379e55c94568f7a0a7096b36e8e30"
          }}
          style={styles.ImageBackground_268_118}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8651/e36e/21f560e372c0b98e62a398684d2c0b01"
          }}
          style={styles.ImageBackground_268_119}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab64/de54/9b28896821ae7b35fcfa253d16ebb9db"
          }}
          style={styles.ImageBackground_268_120}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/293d/4edc/c4002c7fced396cc717609b6fff2ee9b"
          }}
          style={styles.ImageBackground_268_121}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8384/0f2c/7df9646ad0b8b79af582fb639dbc78d1"
          }}
          style={styles.ImageBackground_268_122}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bf1/8c73/73dc8b98e280145b98edd82f80c62eda"
          }}
          style={styles.ImageBackground_268_123}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67e0/fd4b/7c0ae32fdb9fa8bc85f59515f5891936"
          }}
          style={styles.ImageBackground_268_124}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6df2/ce33/46b828b654d2170d45b9fb0cf0abc102"
          }}
          style={styles.ImageBackground_268_125}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d32/4f0d/0922f0f42fc7f2125e2b2452b94978ba"
          }}
          style={styles.ImageBackground_268_126}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a289/420f/4083f888904a4e3c73d941047a4d6b49"
          }}
          style={styles.ImageBackground_268_127}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e0d/7960/2d3246070186d0fa12d923cdf145f722"
          }}
          style={styles.ImageBackground_268_128}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c4b/065c/2ddf8ea570a1d11b9a96dc2c62436780"
          }}
          style={styles.ImageBackground_268_129}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d17/38bd/12c98a85b273d5f3143cbf1bec2906c0"
          }}
          style={styles.ImageBackground_268_132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7997/dc19/49c2e41a3578efd97bd97fae9d87a770"
          }}
          style={styles.ImageBackground_268_133}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b57c/e912/367caef4ddc8f548e9ca24e5564f6836"
          }}
          style={styles.ImageBackground_268_134}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3982/ad73/41f790ddacab904252d8258422c6ebe7"
          }}
          style={styles.ImageBackground_268_135}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2e1/7b2f/1c820e8f51f23007f9c841f95879c230"
          }}
          style={styles.ImageBackground_268_136}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d76/85f6/3236f692fdc35d0954bcfa8b2d0525c5"
          }}
          style={styles.ImageBackground_268_137}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c6/707a/49da03bd981454539f2f1a4a4cafb10b"
          }}
          style={styles.ImageBackground_268_138}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c6/707a/49da03bd981454539f2f1a4a4cafb10b"
          }}
          style={styles.ImageBackground_268_139}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3863/1714/3d263ef5e9ca3033b77dde8f8137c4d0"
          }}
          style={styles.ImageBackground_268_140}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87a3/ec5a/576a5ee228035e15dd0d735f0e328c63"
          }}
          style={styles.ImageBackground_268_141}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0ad/ff5e/962da0e7b182d7b9257b1a4d1d95ea5f"
          }}
          style={styles.ImageBackground_268_142}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/945b/7cb5/68664930e594551f5ec81bd3e29d6943"
          }}
          style={styles.ImageBackground_268_143}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4d3/38d2/e1afd76fd49a43ec02344e55bf91043c"
          }}
          style={styles.ImageBackground_268_144}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8384/fb4f/a6aa4606c7dd5588765ad7a98a67b181"
          }}
          style={styles.ImageBackground_268_145}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3db/2560/e24ef3a2308545c9a33966e11ec41626"
          }}
          style={styles.ImageBackground_268_146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2383/f4f4/09010d95935f247ee3475d677a3e0c83"
          }}
          style={styles.ImageBackground_268_147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c8c/c3d9/6e0decbf16626b19ba869d6724d642d4"
          }}
          style={styles.ImageBackground_268_148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d0/ea67/9aacd3e7c1c4fa5829978519f5e7ac0f"
          }}
          style={styles.ImageBackground_268_149}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2d0/29e6/c083e343ec9582acafded9e5f835c55d"
          }}
          style={styles.ImageBackground_268_150}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd57/6386/74234bcdc0aec927c2c36d2bc3cd7b15"
          }}
          style={styles.ImageBackground_268_151}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1dc3/57c8/58d5c503ec76fb2e6095994c1b9a542c"
          }}
          style={styles.ImageBackground_268_152}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa6a/a21b/f4138b199027166869332d24120c8a77"
          }}
          style={styles.ImageBackground_268_153}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5cb/0373/31dd70ef0f7ea67576b3c31e2e763e47"
          }}
          style={styles.ImageBackground_268_154}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf5d/1128/da080cdd1f6970a834300684485184b8"
          }}
          style={styles.ImageBackground_268_155}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e166/7041/30181fb009d7350fe34d36c80800eee0"
          }}
          style={styles.ImageBackground_268_156}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5360/430d/db9abe53e465122c579303b602fb4546"
          }}
          style={styles.ImageBackground_268_157}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6210/d611/2eb8651d42daf87ac253fbb3a07b971b"
          }}
          style={styles.ImageBackground_268_158}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f243/178d/3e8d603685c27100068ffb51bcc29cf1"
          }}
          style={styles.ImageBackground_268_159}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/671d/acc7/9b1b70cda9f6cb61cd27e172249d2f62"
          }}
          style={styles.ImageBackground_268_160}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d04/4435/18d5b8a2c4401cf0af943435bde96248"
          }}
          style={styles.ImageBackground_268_161}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9088/9b64/a917fcc6790b0bf93decd66acc95ab9d"
          }}
          style={styles.ImageBackground_268_162}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e276/1f6f/ecc4623d8079f9c97d0ffaa9f7e11f06"
          }}
          style={styles.ImageBackground_268_163}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa10/caaf/4a627d4cd0f91e271e66fbb4165d3574"
          }}
          style={styles.ImageBackground_268_164}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e87/65ee/6a167f6fba118df6d92c5e746d95d9f9"
          }}
          style={styles.ImageBackground_268_165}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e276/1f6f/ecc4623d8079f9c97d0ffaa9f7e11f06"
          }}
          style={styles.ImageBackground_268_166}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ed7/a855/33a441882feb0c4e3c2bd4b4af192ff7"
          }}
          style={styles.ImageBackground_268_167}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ed9/1a47/57fa562816b47b8a4b4c90147f7cd3a9"
          }}
          style={styles.ImageBackground_268_168}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e231/009b/96d5638aa801183977d0b2f2b8558f6c"
          }}
          style={styles.ImageBackground_268_169}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db9/ebec/915fe27d534de360187af37b5d979db5"
          }}
          style={styles.ImageBackground_268_170}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6267/40dc/ab4a204f8d52666345ed9f3662ee8520"
          }}
          style={styles.ImageBackground_268_171}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e450/0ced/e6f821e25e151310d1d633162e80d7de"
          }}
          style={styles.ImageBackground_268_172}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9697/86bd/35915b9437a50484c3ca24fb3d26e297"
          }}
          style={styles.ImageBackground_268_173}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/224a/b4c7/e52269767c1ace2fc2b457add67e6dd0"
          }}
          style={styles.ImageBackground_268_174}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b54d/0523/4474c14adaad089b4af9596e7c1099d9"
          }}
          style={styles.ImageBackground_268_175}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/405b/4c3a/e00af9d7fb5c3bc4520e27443c90b6a3"
          }}
          style={styles.ImageBackground_268_176}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd9c/875d/a690e26bdf525365f983529c6182321b"
          }}
          style={styles.ImageBackground_268_177}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/605b/3ad4/dbf663fd5354103a559879071ba14f00"
          }}
          style={styles.ImageBackground_268_178}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed55/ffa4/1c155bac919b40b5b1cdf9b9faf3edea"
          }}
          style={styles.ImageBackground_268_179}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab68/6928/1d6067b22a25cff63e3fed72c1636779"
          }}
          style={styles.ImageBackground_268_180}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ae3/1e2f/a75c87dc95ac22489ab069311a0c2d6a"
          }}
          style={styles.ImageBackground_268_181}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2bb/5e22/0584da7bf7785760fa85298ca1bbe351"
          }}
          style={styles.ImageBackground_268_182}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9f7/ff9d/0ef48fa44d8a41a26698b2e66b354342"
          }}
          style={styles.ImageBackground_268_183}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecd1/ec7b/044541582d166aa48ad69eebc775372d"
          }}
          style={styles.ImageBackground_268_184}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4614/bb13/3c965850661f0e0756ae77fc1acf3cce"
          }}
          style={styles.ImageBackground_268_185}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de89/d481/81e5f78c8337d99653d06649931a8b9d"
          }}
          style={styles.ImageBackground_268_186}
        />
        <View source={{ uri: "null" }} style={styles.View_268_187} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53e9/2700/c2f0fba4c9d5cdb1e277984ba0db6b79"
          }}
          style={styles.ImageBackground_268_188}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23b0/d01d/a0335e208721348511b4d17782cba840"
          }}
          style={styles.ImageBackground_268_189}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf75/8230/e4f11a1b8debf6ca4756c99d028e0be0"
          }}
          style={styles.ImageBackground_268_190}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e02/b8e2/b668ce00287abce43458ae42f4ebe82e"
          }}
          style={styles.ImageBackground_268_191}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13f2/299a/7cdbf275cbc32a841c3440d70f912c58"
          }}
          style={styles.ImageBackground_268_192}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e87/65ee/6a167f6fba118df6d92c5e746d95d9f9"
          }}
          style={styles.ImageBackground_268_193}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e276/1f6f/ecc4623d8079f9c97d0ffaa9f7e11f06"
          }}
          style={styles.ImageBackground_268_194}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e87/65ee/6a167f6fba118df6d92c5e746d95d9f9"
          }}
          style={styles.ImageBackground_268_195}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e276/1f6f/ecc4623d8079f9c97d0ffaa9f7e11f06"
          }}
          style={styles.ImageBackground_268_196}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e87/65ee/6a167f6fba118df6d92c5e746d95d9f9"
          }}
          style={styles.ImageBackground_268_197}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e276/1f6f/ecc4623d8079f9c97d0ffaa9f7e11f06"
          }}
          style={styles.ImageBackground_268_198}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f6b/3825/fdde6d68d77898033277e48a47064535"
          }}
          style={styles.ImageBackground_268_199}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/275d/9889/21d5574234f931f31e12fadb8566616d"
          }}
          style={styles.ImageBackground_268_200}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac11/b0eb/08acc1fc74c17117022f2cb4e2fc2840"
          }}
          style={styles.ImageBackground_268_201}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/939a/8495/e8ffd2174f4da667a6a94b1ac8dbde95"
          }}
          style={styles.ImageBackground_268_202}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/344f/ed4d/6be163072c4f03b63d2dceb92af6bf5e"
          }}
          style={styles.ImageBackground_268_206}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddcd/3fc9/f2145a47be43036aa88859b0949eed3d"
          }}
          style={styles.ImageBackground_268_207}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e15b/3555/ffb45d7cc4a9deb5d455e5f549aecf31"
          }}
          style={styles.ImageBackground_268_208}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff2b/df44/f88bcf915064f303cc5b47828e814c81"
          }}
          style={styles.ImageBackground_268_209}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a1/ecb8/887ce6be644485f6a861e388788636a6"
          }}
          style={styles.ImageBackground_268_210}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/909e/cfca/9ea0d36cada99b0d4acb3a5565fb8137"
          }}
          style={styles.ImageBackground_268_211}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb57/9d57/219c4704da39ece74c9ea7a42e5fdcbb"
          }}
          style={styles.ImageBackground_268_212}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ceeb/44c9/948b0260038c9fa29ff84954de1ac618"
          }}
          style={styles.ImageBackground_268_213}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bad7/7794/2db48ab7bc4049d7fed13abe90164b9a"
          }}
          style={styles.ImageBackground_268_214}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea5b/0198/9104ad1a85143508e245ce49cec920f5"
          }}
          style={styles.ImageBackground_268_215}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32e6/e6e7/39667e9278095b4ffba90cba158720f9"
          }}
          style={styles.ImageBackground_268_216}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dc1/1d38/8162e19e3ed8be4fc295dd014170d7a2"
          }}
          style={styles.ImageBackground_268_217}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dc1/1d38/8162e19e3ed8be4fc295dd014170d7a2"
          }}
          style={styles.ImageBackground_268_218}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dc1/1d38/8162e19e3ed8be4fc295dd014170d7a2"
          }}
          style={styles.ImageBackground_268_219}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dc1/1d38/8162e19e3ed8be4fc295dd014170d7a2"
          }}
          style={styles.ImageBackground_268_220}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dc1/1d38/8162e19e3ed8be4fc295dd014170d7a2"
          }}
          style={styles.ImageBackground_268_221}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dc1/1d38/8162e19e3ed8be4fc295dd014170d7a2"
          }}
          style={styles.ImageBackground_268_222}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dc1/1d38/8162e19e3ed8be4fc295dd014170d7a2"
          }}
          style={styles.ImageBackground_268_223}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1b0/5b39/02e8281b576c38592e6fd1839d7ec7ca"
          }}
          style={styles.ImageBackground_268_224}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e036/7dd8/29d805865e1aec6058f063d98d61d76a"
          }}
          style={styles.ImageBackground_268_225}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5816/0989/10ab903dc1c3ba85a5a59b0e0d375424"
          }}
          style={styles.ImageBackground_268_226}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5718/dafc/5954abbacc53088356b0f0ff3b4edea3"
          }}
          style={styles.ImageBackground_268_227}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5718/dafc/5954abbacc53088356b0f0ff3b4edea3"
          }}
          style={styles.ImageBackground_268_228}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5718/dafc/5954abbacc53088356b0f0ff3b4edea3"
          }}
          style={styles.ImageBackground_268_229}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5718/dafc/5954abbacc53088356b0f0ff3b4edea3"
          }}
          style={styles.ImageBackground_268_230}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5718/dafc/5954abbacc53088356b0f0ff3b4edea3"
          }}
          style={styles.ImageBackground_268_231}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5718/dafc/5954abbacc53088356b0f0ff3b4edea3"
          }}
          style={styles.ImageBackground_268_232}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5718/dafc/5954abbacc53088356b0f0ff3b4edea3"
          }}
          style={styles.ImageBackground_268_233}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb98/a3cb/29cf4e6aae7cfa72d71bd9445d717423"
          }}
          style={styles.ImageBackground_268_234}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df97/5288/1bfa2a257f6b1b86e97c31ecb6ab2512"
          }}
          style={styles.ImageBackground_268_235}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2d9/dd9d/97eef1065310dec2e8019c3795fc2555"
          }}
          style={styles.ImageBackground_268_236}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/429c/bff2/9eee7e5198d9e2d622000a680dd65660"
          }}
          style={styles.ImageBackground_268_237}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/429c/bff2/9eee7e5198d9e2d622000a680dd65660"
          }}
          style={styles.ImageBackground_268_238}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/429c/bff2/9eee7e5198d9e2d622000a680dd65660"
          }}
          style={styles.ImageBackground_268_239}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/429c/bff2/9eee7e5198d9e2d622000a680dd65660"
          }}
          style={styles.ImageBackground_268_240}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/429c/bff2/9eee7e5198d9e2d622000a680dd65660"
          }}
          style={styles.ImageBackground_268_241}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/429c/bff2/9eee7e5198d9e2d622000a680dd65660"
          }}
          style={styles.ImageBackground_268_242}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/429c/bff2/9eee7e5198d9e2d622000a680dd65660"
          }}
          style={styles.ImageBackground_268_243}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0405/d72e/8b0db1682a384100e687054a36843c30"
          }}
          style={styles.ImageBackground_268_244}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5697/14c6/c1970fdab3b4466b63d2fc8db23f0aa9"
          }}
          style={styles.ImageBackground_268_245}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cca4/48e2/cdebdb25210c6c127551da9f31009752"
          }}
          style={styles.ImageBackground_268_246}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c2f/f7eb/b4db275b3df8888f380acdf4112b98bd"
          }}
          style={styles.ImageBackground_268_247}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c2f/f7eb/b4db275b3df8888f380acdf4112b98bd"
          }}
          style={styles.ImageBackground_268_248}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cca4/48e2/cdebdb25210c6c127551da9f31009752"
          }}
          style={styles.ImageBackground_268_249}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c2f/f7eb/b4db275b3df8888f380acdf4112b98bd"
          }}
          style={styles.ImageBackground_268_250}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c2f/f7eb/b4db275b3df8888f380acdf4112b98bd"
          }}
          style={styles.ImageBackground_268_251}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f835/10c8/e390d9fa0894a2dc8e51b80145c85fcc"
          }}
          style={styles.ImageBackground_268_252}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cca4/48e2/cdebdb25210c6c127551da9f31009752"
          }}
          style={styles.ImageBackground_268_253}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cca4/48e2/cdebdb25210c6c127551da9f31009752"
          }}
          style={styles.ImageBackground_268_254}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82c9/5c57/f381d5098a4b610334aceec93ec3eef3"
          }}
          style={styles.ImageBackground_268_255}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b05/013b/b9c364d6ba00ef0b201a29de13a71e4e"
          }}
          style={styles.ImageBackground_268_256}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b05/013b/b9c364d6ba00ef0b201a29de13a71e4e"
          }}
          style={styles.ImageBackground_268_257}
        />
      </View>
      <View style={styles.View_280_0}>
        <Text style={styles.Text_280_0}>
          Thank you! your payment has been successfully completed
        </Text>
      </View>
      <View style={styles.View_280_1} />
      <View style={styles.View_280_2}>
        <Text style={styles.Text_280_2}>Close</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_268_980: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_268_982: {
    width: wp("67.84565916398714%"),
    minWidth: wp("67.84565916398714%"),
    minHeight: hp("11.598746081504702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.720257234726688%"),
    top: hp("53.29153605015674%")
  },
  Text_268_982: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.180000305175781,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_34: {
    width: wp("67.52411575562701%"),
    minWidth: wp("67.52411575562701%"),
    height: hp("42.94670846394985%"),
    minHeight: hp("42.94670846394985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.39871382636656%"),
    top: hp("7.210031347962382%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_268_35: {
    width: wp("67.52411575562701%"),
    height: hp("10.324151687861237%"),
    top: hp("32.62254481778997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_268_36: {
    width: wp("6.868873915105005%"),
    height: hp("5.547471479936079%"),
    top: hp("27.74501310246865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.08922201567523%")
  },
  ImageBackground_268_37: {
    width: wp("0.9733341131179662%"),
    height: hp("5.27587460126249%"),
    top: hp("27.956167956504704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.98478634947749%")
  },
  ImageBackground_268_38: {
    width: wp("7.203173867375905%"),
    height: hp("3.1160193177226194%"),
    top: hp("26.538315536833853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.88653034565917%")
  },
  ImageBackground_268_39: {
    width: wp("6.164065051308782%"),
    height: hp("1.5574201147384403%"),
    top: hp("28.096988881269592%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.88653034565917%")
  },
  ImageBackground_268_40: {
    width: wp("1.03912353515625%"),
    height: hp("2.8596716614726194%"),
    top: hp("26.794701459639494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.05057086515272%")
  },
  ImageBackground_268_41: {
    width: wp("6.086225601637862%"),
    height: hp("5.223674236046484%"),
    top: hp("27.044046336206893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.636536625803856%")
  },
  ImageBackground_268_42: {
    width: wp("1.4440113325211013%"),
    height: hp("5.715818016506661%"),
    top: hp("27.41117567104232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.38775497387461%")
  },
  ImageBackground_268_43: {
    width: wp("4.048765127298533%"),
    height: hp("1.7345225175720025%"),
    top: hp("25.956128159286838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.45413296322347%")
  },
  ImageBackground_268_44: {
    width: wp("6.005957502260852%"),
    height: hp("2.3968544125930644%"),
    top: hp("27.41117567104232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.83338462118168%")
  },
  ImageBackground_268_45: {
    width: wp("9.27837899260199%"),
    height: hp("7.493227776315145%"),
    top: hp("29.14465064165361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.50444634244373%")
  },
  ImageBackground_268_46: {
    width: wp("1.3142821873115957%"),
    height: hp("7.126009950069798%"),
    top: hp("29.42965994807994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.46861183681672%")
  },
  ImageBackground_268_47: {
    width: wp("9.73035806244976%"),
    height: hp("4.209435920356583%"),
    top: hp("27.51388310638715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.23110304461415%")
  },
  ImageBackground_268_48: {
    width: wp("8.326770255036676%"),
    height: hp("2.103546046911736%"),
    top: hp("29.619768196512542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.23110304461415%")
  },
  ImageBackground_268_49: {
    width: wp("1.4035779946869977%"),
    height: hp("3.8627552761926918%"),
    top: hp("27.86050156739812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.55786839328778%")
  },
  ImageBackground_268_50: {
    width: wp("8.221165696907656%"),
    height: hp("7.056202185938725%"),
    top: hp("28.197247257053295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.24432588926849%")
  },
  ImageBackground_268_51: {
    width: wp("1.9508975111786575%"),
    height: hp("7.720830074298345%"),
    top: hp("28.693487950626963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.609114373995176%")
  },
  ImageBackground_268_52: {
    width: wp("5.462263788057677%"),
    height: hp("2.342245646031299%"),
    top: hp("26.725362460815052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.34861083199357%")
  },
  ImageBackground_268_53: {
    width: wp("8.115561138778638%"),
    height: hp("3.2380274470697%"),
    top: hp("28.693487950626963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.15691883540997%")
  },
  ImageBackground_268_54: {
    width: wp("5.742265020536073%"),
    height: hp("4.6376530279560155%"),
    top: hp("31.5455708757837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.02134307174438%")
  },
  ImageBackground_268_55: {
    width: wp("0.813430835196443%"),
    height: hp("4.411222643239371%"),
    top: hp("31.721520498628532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.950157631631825%")
  },
  ImageBackground_268_56: {
    width: wp("6.022256440288384%"),
    height: hp("2.605089050101636%"),
    top: hp("30.536022604819753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.85177916499197%")
  },
  ImageBackground_268_57: {
    width: wp("5.153908683556069%"),
    height: hp("1.3016560234619907%"),
    top: hp("31.839381490007842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.85177916499197%")
  },
  ImageBackground_268_58: {
    width: wp("0.8683379440062299%"),
    height: hp("2.39039693132837%"),
    top: hp("30.75077451508621%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.00573691217845%")
  },
  ImageBackground_268_59: {
    width: wp("5.088133980606913%"),
    height: hp("4.366644497575431%"),
    top: hp("30.959480309561126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.47877311093248%")
  },
  ImageBackground_268_60: {
    width: wp("1.207465757511053%"),
    height: hp("4.77843807782499%"),
    top: hp("31.266378085815052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.94267483922829%")
  },
  ImageBackground_268_61: {
    width: wp("3.3842816613494775%"),
    height: hp("1.4484991474211404%"),
    top: hp("30.051261877938874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.16111083199357%")
  },
  ImageBackground_268_62: {
    width: wp("5.017536322786877%"),
    height: hp("2.0026514896404777%"),
    top: hp("31.266378085815052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.80773965032154%")
  },
  ImageBackground_268_63: {
    width: wp("17.851232792403536%"),
    height: hp("37.30891595439851%"),
    top: hp("2.259180912029781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.62158360128617%")
  },
  ImageBackground_268_64: {
    width: wp("3.2679002767973775%"),
    height: hp("1.4464231867775275%"),
    top: hp("15.96503661344044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.51002311093248%")
  },
  ImageBackground_268_65: {
    width: wp("1.031265994743519%"),
    height: hp("1.3438999092317299%"),
    top: hp("16.067514449451412%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.74661814208199%")
  },
  ImageBackground_268_66: {
    width: wp("6.493721130959858%"),
    height: hp("8.543956840299888%"),
    top: hp("9.257751273510973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.687898789188104%")
  },
  ImageBackground_268_67: {
    width: wp("6.493721130959858%"),
    height: hp("8.543956840299888%"),
    top: hp("9.257751273510973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.687898789188104%")
  },
  ImageBackground_268_68: {
    width: wp("2.9231031607968245%"),
    height: hp("3.442849186146894%"),
    top: hp("36.12102640086207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.467628994172024%")
  },
  ImageBackground_268_69: {
    width: wp("2.925767315928959%"),
    height: hp("2.0144758553340516%"),
    top: hp("37.54944038989028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.464959932676855%")
  },
  ImageBackground_268_70: {
    width: wp("0.39343143966036975%"),
    height: hp("0.284519016182161%"),
    top: hp("37.69133277821316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.13555692323151%")
  },
  ImageBackground_268_71: {
    width: wp("9.11623841313304%"),
    height: hp("18.189664021554787%"),
    top: hp("18.58698447296238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.06728861032958%")
  },
  ImageBackground_268_72: {
    width: wp("9.745435316079682%"),
    height: hp("7.870406865326214%"),
    top: hp("12.30453443377743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.984261957395496%")
  },
  ImageBackground_268_73: {
    width: wp("1.3806554665519495%"),
    height: hp("7.485007641831162%"),
    top: hp("12.604238097570533%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.349022181471064%")
  },
  ImageBackground_268_74: {
    width: wp("10.219743244134346%"),
    height: hp("4.420612299330182%"),
    top: hp("10.592259134992162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.69702383942926%")
  },
  ImageBackground_268_75: {
    width: wp("8.745552872538182%"),
    height: hp("2.2091318447388075%"),
    top: hp("12.80368338557994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.69702383942926%")
  },
  ImageBackground_268_76: {
    width: wp("1.474185465233119%"),
    height: hp("4.056336214549862%"),
    top: hp("10.956556744710031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.44251783561093%")
  },
  ImageBackground_268_77: {
    width: wp("8.63512045317524%"),
    height: hp("7.410512224633865%"),
    top: hp("11.310216251959247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.76088035068328%")
  },
  ImageBackground_268_78: {
    width: wp("2.04925537109375%"),
    height: hp("8.10915071015074%"),
    top: hp("11.831100607366775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.24514858822348%")
  },
  ImageBackground_268_79: {
    width: wp("5.740461932117916%"),
    height: hp("2.4628576440123555%"),
    top: hp("9.761798344435736%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.924277155345656%")
  },
  ImageBackground_268_80: {
    width: wp("8.5210720442499%"),
    height: hp("3.4005168089672315%"),
    top: hp("11.831100607366775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.6227611284164%")
  },
  ImageBackground_268_81: {
    width: wp("3.3582239672302046%"),
    height: hp("4.037426556913084%"),
    top: hp("5.4636988146551735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.10514218247588%")
  },
  ImageBackground_268_82: {
    width: wp("2.3959929536776525%"),
    height: hp("2.1620687646178243%"),
    top: hp("5.4636988146551735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.10514218247588%")
  },
  ImageBackground_268_83: {
    width: wp("4.084036971211816%"),
    height: hp("3.9700466263630543%"),
    top: hp("3.5952194357366762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.514852542202576%")
  },
  ImageBackground_268_84: {
    width: wp("7.636430255853095%"),
    height: hp("3.361214664662519%"),
    top: hp("18.587596737852667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.54461414790997%")
  },
  ImageBackground_268_85: {
    width: wp("8.572372976223372%"),
    height: hp("14.875869990142535%"),
    top: hp("6.942701190242947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.1328721613746%")
  },
  ImageBackground_268_86: {
    width: wp("2.487354339893991%"),
    height: hp("2.2604616458139453%"),
    top: hp("7.0066063381661445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.97682626607717%")
  },
  ImageBackground_268_87: {
    width: wp("2.487354339893991%"),
    height: hp("2.2604616458139453%"),
    top: hp("6.941553193573667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.97682626607717%")
  },
  ImageBackground_268_88: {
    width: wp("0.8279193252612541%"),
    height: hp("0.6883358133250269%"),
    top: hp("8.46685810148903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.192357691921224%")
  },
  ImageBackground_268_89: {
    width: wp("0.8073861959279541%"),
    height: hp("0.6563503540421728%"),
    top: hp("8.401422291340126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.158601914188104%")
  },
  ImageBackground_268_90: {
    width: wp("0.267921766667504%"),
    height: hp("0.2604505485128086%"),
    top: hp("9.712893686324453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.573797980305464%")
  },
  ImageBackground_268_91: {
    width: wp("0.2679266730305466%"),
    height: hp("0.2604493526829448%"),
    top: hp("13.227217623432601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.55814157958199%")
  },
  ImageBackground_268_92: {
    width: wp("0.267921766667504%"),
    height: hp("0.2604505485128086%"),
    top: hp("16.78554809952978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.408639595056265%")
  },
  ImageBackground_268_93: {
    width: wp("0.2679266730305466%"),
    height: hp("0.2604493526829448%"),
    top: hp("20.65766433189655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.37543332998393%")
  },
  ImageBackground_268_94: {
    width: wp("0.2679266730305466%"),
    height: hp("0.2604481568530809%"),
    top: hp("11.372361138322884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.98236535369775%")
  },
  ImageBackground_268_95: {
    width: wp("0.26791686030446143%"),
    height: hp("0.2604493526829448%"),
    top: hp("14.984647457876175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.078495528536976%")
  },
  ImageBackground_268_96: {
    width: wp("0.26791686030446143%"),
    height: hp("0.2604493526829448%"),
    top: hp("18.531880632836994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.19684171523311%")
  },
  ImageBackground_268_97: {
    width: wp("0.26791686030446143%"),
    height: hp("0.2604493526829448%"),
    top: hp("21.091760139106587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.3978063454582%")
  },
  ImageBackground_268_98: {
    width: wp("5.710903547967745%"),
    height: hp("12.938826510151353%"),
    top: hp("7.834541536050156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.48030232616559%")
  },
  ImageBackground_268_99: {
    width: wp("5.713464669475984%"),
    height: hp("12.938826510151353%"),
    top: hp("7.834541536050156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.54545882737138%")
  },
  ImageBackground_268_100: {
    width: wp("0.9271063605305466%"),
    height: hp("1.7140427353240106%"),
    top: hp("9.734552556818183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.049980531551455%")
  },
  ImageBackground_268_101: {
    width: wp("1.1048884253793207%"),
    height: hp("3.8287339165666636%"),
    top: hp("11.427005779780565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.54408033561093%")
  },
  ImageBackground_268_102: {
    width: wp("1.180137315363746%"),
    height: hp("1.8167095124534678%"),
    top: hp("18.108882126763326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.39252788384244%")
  },
  ImageBackground_268_103: {
    width: wp("0.674600386542906%"),
    height: hp("1.1958932428150715%"),
    top: hp("17.68596015380094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.63136492664792%")
  },
  ImageBackground_268_104: {
    width: wp("3.7056386279139875%"),
    height: hp("9.882741587289075%"),
    top: hp("8.188430642633229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.058172980305464%")
  },
  ImageBackground_268_105: {
    width: wp("3.7720168135173835%"),
    height: hp("9.882741587289075%"),
    top: hp("8.188430642633229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.988777381430864%")
  },
  ImageBackground_268_106: {
    width: wp("3.061909077635149%"),
    height: hp("1.9063094566608298%"),
    top: hp("14.494912078761757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.622026351487136%")
  },
  ImageBackground_268_107: {
    width: wp("1.351060284678959%"),
    height: hp("3.974799751114322%"),
    top: hp("22.37116416046238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.53361447447749%")
  },
  ImageBackground_268_108: {
    width: wp("1.9619221089353898%"),
    height: hp("0.408543314679663%"),
    top: hp("29.24008743142633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.9133183028537%")
  },
  ImageBackground_268_109: {
    width: wp("1.085905706767484%"),
    height: hp("0.9635327378036833%"),
    top: hp("29.816228693181817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.04672741659968%")
  },
  ImageBackground_268_110: {
    width: wp("0.44823060848321944%"),
    height: hp("0.1928945320153311%"),
    top: hp("29.108220880681817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.59457583902733%")
  },
  ImageBackground_268_111: {
    width: wp("1.5364349463361637%"),
    height: hp("0.9188589257506368%"),
    top: hp("29.2953443377743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.79927401527331%")
  },
  ImageBackground_268_112: {
    width: wp("1.352002306383139%"),
    height: hp("0.48322288967598936%"),
    top: hp("33.86054442594044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.305434837218655%")
  },
  ImageBackground_268_113: {
    width: wp("0.774700005338123%"),
    height: hp("0.445164408429663%"),
    top: hp("34.81935124412226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.12119109224277%")
  },
  ImageBackground_268_114: {
    width: wp("1.213917624912078%"),
    height: hp("0.5874944704827096%"),
    top: hp("35.49996020278213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.109180315514465%")
  },
  ImageBackground_268_115: {
    width: wp("1.6401309292416097%"),
    height: hp("0.19398752051087384%"),
    top: hp("35.06471639890282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.134241232918%")
  },
  ImageBackground_268_116: {
    width: wp("0.47937620107767287%"),
    height: hp("0.11774619171238244%"),
    top: hp("35.368782450039184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.15684975381833%")
  },
  ImageBackground_268_117: {
    width: wp("0.284210891968951%"),
    height: hp("0.2844950995848844%"),
    top: hp("37.50420932112068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.130262761254016%")
  },
  ImageBackground_268_118: {
    width: wp("5.340348025993519%"),
    height: hp("2.9484309372857074%"),
    top: hp("35.6398627302116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.99259884947749%")
  },
  ImageBackground_268_119: {
    width: wp("5.33799542491459%"),
    height: hp("1.2712125867885482%"),
    top: hp("37.317085864028215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.99495390373794%")
  },
  ImageBackground_268_120: {
    width: wp("0.4187875238645498%"),
    height: hp("0.7162327303034385%"),
    top: hp("36.98332496571316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.39985681270097%")
  },
  ImageBackground_268_121: {
    width: wp("4.004382167215133%"),
    height: hp("2.786982844242108%"),
    top: hp("3.5952194357366762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.594531878014465%")
  },
  ImageBackground_268_122: {
    width: wp("5.590216829845759%"),
    height: hp("4.163651780274968%"),
    top: hp("2.4639069847178687%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.49809711615755%")
  },
  ImageBackground_268_123: {
    width: wp("8.81937401087721%"),
    height: hp("7.332670875477566%"),
    top: hp("10.17408221492947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.166583978094856%")
  },
  ImageBackground_268_124: {
    width: wp("8.820595695274818%"),
    height: hp("7.332670875477566%"),
    top: hp("10.17408221492947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.234174035369776%")
  },
  ImageBackground_268_125: {
    width: wp("0.32062591847116156%"),
    height: hp("1.0328968490552752%"),
    top: hp("15.538441051136363%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.364600080385856%")
  },
  ImageBackground_268_126: {
    width: wp("0.7601084816494172%"),
    height: hp("1.002488091447884%"),
    top: hp("15.364787421630094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.81263502311093%")
  },
  ImageBackground_268_127: {
    width: wp("0.53206072742916%"),
    height: hp("0.6673113305740596%"),
    top: hp("15.104345243926335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.95067574356913%")
  },
  ImageBackground_268_128: {
    width: wp("0.8003014076944333%"),
    height: hp("0.4370865776994759%"),
    top: hp("14.561725484913797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.995343272709%")
  },
  ImageBackground_268_129: {
    width: wp("5.582410806244976%"),
    height: hp("2.5751239453737265%"),
    top: hp("4.039341080525079%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.49739059987942%")
  },
  ImageBackground_268_132: {
    width: wp("9.765952499733094%"),
    height: hp("13.25714446160487%"),
    top: hp("26.408668446316614%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.093743719855304%")
  },
  ImageBackground_268_133: {
    width: wp("12.375797872757989%"),
    height: hp("15.795952249843873%"),
    top: hp("18.551243509992165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.18837294011254%")
  },
  ImageBackground_268_134: {
    width: wp("12.375797872757989%"),
    height: hp("15.795952249843873%"),
    top: hp("18.551243509992165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.18837294011254%")
  },
  ImageBackground_268_135: {
    width: wp("15.575199188526803%"),
    height: hp("8.75675356873898%"),
    top: hp("21.33406396943574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.820645347668808%")
  },
  ImageBackground_268_136: {
    width: wp("8.419093288409366%"),
    height: hp("0.8183063758204349%"),
    top: hp("32.95515771943574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.409565916398716%")
  },
  ImageBackground_268_137: {
    width: wp("1.5158245417849427%"),
    height: hp("4.498625847986873%"),
    top: hp("29.93003342966301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.71314811093248%")
  },
  ImageBackground_268_138: {
    width: wp("2.2431278535407455%"),
    height: hp("3.6682655071390085%"),
    top: hp("34.17731497355015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.9330222568328%")
  },
  ImageBackground_268_139: {
    width: wp("2.2431278535407455%"),
    height: hp("3.6682655071390085%"),
    top: hp("34.17731497355015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.24731523814308%")
  },
  ImageBackground_268_140: {
    width: wp("3.788355002449256%"),
    height: hp("4.911010168189165%"),
    top: hp("35.08331394494514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.796165343649513%")
  },
  ImageBackground_268_141: {
    width: wp("3.788348869495453%"),
    height: hp("4.911010168189165%"),
    top: hp("35.08331394494514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.481793860530544%")
  },
  ImageBackground_268_142: {
    width: wp("24.970699199909564%"),
    height: hp("26.173948568983885%"),
    top: hp("12.14236077096395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.899480004019292%")
  },
  ImageBackground_268_143: {
    width: wp("2.188046568842946%"),
    height: hp("2.173215094778605%"),
    top: hp("32.66257163499216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.548467016680064%")
  },
  ImageBackground_268_144: {
    width: wp("4.981668355763917%"),
    height: hp("2.990416523804859%"),
    top: hp("33.415045185148905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.13377650221061%")
  },
  ImageBackground_268_145: {
    width: wp("4.647334058951718%"),
    height: hp("1.5462175805740597%"),
    top: hp("34.85930152821316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.468115705385856%")
  },
  ImageBackground_268_146: {
    width: wp("1.9460745563077773%"),
    height: hp("2.6016833266494417%"),
    top: hp("33.70946806426332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.908727517081992%")
  },
  ImageBackground_268_147: {
    width: wp("14.185774824626959%"),
    height: hp("9.968880201955574%"),
    top: hp("24.340361113832287%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.45512208601286%")
  },
  ImageBackground_268_148: {
    width: wp("5.1744356799355655%"),
    height: hp("1.543113206247551%"),
    top: hp("26.62410915458464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.55475658159164%")
  },
  ImageBackground_268_149: {
    width: wp("1.8326247236736335%"),
    height: hp("1.131683158276597%"),
    top: hp("32.674204667907524%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.126048784163984%")
  },
  ImageBackground_268_150: {
    width: wp("2.207370279686244%"),
    height: hp("0.8941841723403213%"),
    top: hp("33.415045185148905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.433556069131832%")
  },
  ImageBackground_268_151: {
    width: wp("1.8326247236736335%"),
    height: hp("1.131683158276597%"),
    top: hp("32.674204667907524%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.126048784163984%")
  },
  ImageBackground_268_152: {
    width: wp("2.207370279686244%"),
    height: hp("0.8941841723403213%"),
    top: hp("33.415045185148905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.433556069131832%")
  },
  ImageBackground_268_153: {
    width: wp("4.914372680271553%"),
    height: hp("3.270735785505241%"),
    top: hp("34.958258841105014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.7138075261254%")
  },
  ImageBackground_268_154: {
    width: wp("0.9762975563956994%"),
    height: hp("0.9632409553169083%"),
    top: hp("26.79707398608934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.211989424236336%")
  },
  ImageBackground_268_155: {
    width: wp("0.7729116360090936%"),
    height: hp("1.0328980448851393%"),
    top: hp("28.291076851489027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.940957219654337%")
  },
  ImageBackground_268_156: {
    width: wp("0.3909782581390675%"),
    height: hp("1.2012350148168105%"),
    top: hp("31.488094509208462%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.490504421221864%")
  },
  ImageBackground_268_157: {
    width: wp("1.4645469150359225%"),
    height: hp("0.6923376579643417%"),
    top: hp("31.845580672021942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.339539162982312%")
  },
  ImageBackground_268_158: {
    width: wp("3.347902205979326%"),
    height: hp("2.5683268484277035%"),
    top: hp("15.754647090517242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.356680817926048%")
  },
  ImageBackground_268_159: {
    width: wp("5.855469535018087%"),
    height: hp("8.833603574938161%"),
    top: hp("17.73647200724922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.297019443327972%")
  },
  ImageBackground_268_160: {
    width: wp("5.8498627886511505%"),
    height: hp("8.833601183278434%"),
    top: hp("17.58394151645768%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.263813178255628%")
  },
  ImageBackground_268_161: {
    width: wp("1.517630083384621%"),
    height: hp("11.208745304693622%"),
    top: hp("16.52686618338558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.26083010952572%")
  },
  ImageBackground_268_162: {
    width: wp("5.487303411845609%"),
    height: hp("12.671444931747772%"),
    top: hp("15.334862975117556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.213276853898716%")
  },
  ImageBackground_268_163: {
    width: wp("0.19430424239474478%"),
    height: hp("0.18888730614162913%"),
    top: hp("19.55841925450627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.21666813203376%")
  },
  ImageBackground_268_164: {
    width: wp("1.4578951133409113%"),
    height: hp("2.2525416646257836%"),
    top: hp("15.408258228840126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.055626381631832%")
  },
  ImageBackground_268_165: {
    width: wp("0.1943066955762661%"),
    height: hp("0.1888908936312206%"),
    top: hp("22.584691540948278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.022376155546624%")
  },
  ImageBackground_268_166: {
    width: wp("0.1943066955762661%"),
    height: hp("0.18888611031176528%"),
    top: hp("22.546578051528215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.022376155546624%")
  },
  ImageBackground_268_167: {
    width: wp("1.4584936896321092%"),
    height: hp("2.2525440562855112%"),
    top: hp("15.332566981778996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.093699758842448%")
  },
  ImageBackground_268_168: {
    width: wp("6.4615145373574405%"),
    height: hp("8.361711173221984%"),
    top: hp("16.571408454153605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.283586213826368%")
  },
  ImageBackground_268_169: {
    width: wp("6.46060808678532%"),
    height: hp("8.359721312328567%"),
    top: hp("16.459976244122256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.32252311093248%")
  },
  ImageBackground_268_170: {
    width: wp("1.1012601699093147%"),
    height: hp("1.8642808202665802%"),
    top: hp("16.535667491183386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.389720659163984%")
  },
  ImageBackground_268_171: {
    width: wp("1.100661593618117%"),
    height: hp("1.8642808202665802%"),
    top: hp("16.459976244122256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.3510977692926%")
  },
  ImageBackground_268_172: {
    width: wp("3.683957409628718%"),
    height: hp("2.9752270928744613%"),
    top: hp("19.347800132249215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.688159415192928%")
  },
  ImageBackground_268_173: {
    width: wp("0.5219646588782405%"),
    height: hp("2.829750802449672%"),
    top: hp("19.461069136951416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.850133767081992%")
  },
  ImageBackground_268_174: {
    width: wp("3.8625747827854955%"),
    height: hp("1.67122126373004%"),
    top: hp("18.700789209443574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.580140926446948%")
  },
  ImageBackground_268_175: {
    width: wp("3.305605676779793%"),
    height: hp("0.8353206431230408%"),
    top: hp("19.536760384012542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.580140926446948%")
  },
  ImageBackground_268_176: {
    width: wp("0.556970332596463%"),
    height: hp("1.5333707803469094%"),
    top: hp("18.838625342868344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.885695086414792%")
  },
  ImageBackground_268_177: {
    width: wp("3.2639678268187295%"),
    height: hp("2.8010162066516457%"),
    top: hp("18.972328688283703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.98199168508842%")
  },
  ImageBackground_268_178: {
    width: wp("0.7748042655527784%"),
    height: hp("3.065573234916854%"),
    top: hp("19.16894225117555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.920951818729904%")
  },
  ImageBackground_268_179: {
    width: wp("2.1708632588769845%"),
    height: hp("0.9321505746871326%"),
    top: hp("18.389682112068968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.420659792001608%")
  },
  ImageBackground_268_180: {
    width: wp("3.2217289473849475%"),
    height: hp("1.2852372794315732%"),
    top: hp("19.168329986285265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.55180177351286%")
  },
  ImageBackground_268_181: {
    width: wp("4.016147625791298%"),
    height: hp("3.06589012983077%"),
    top: hp("20.886727933973354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.533108922829584%")
  },
  ImageBackground_268_182: {
    width: wp("1.097845341231662%"),
    height: hp("0.8936699654988735%"),
    top: hp("23.109708684365206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.395137283963024%")
  },
  ImageBackground_268_183: {
    width: wp("1.0972062874453627%"),
    height: hp("0.4368557825357563%"),
    top: hp("23.638169817789972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8157154340836%")
  },
  ImageBackground_268_184: {
    width: wp("4.896701800478233%"),
    height: hp("3.0870144643753674%"),
    top: hp("17.547511755485896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.204459530747588%")
  },
  ImageBackground_268_185: {
    width: wp("1.7507608297170167%"),
    height: hp("6.278869724572639%"),
    top: hp("17.79333610893417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.1783058681672%")
  },
  ImageBackground_268_186: {
    width: wp("1.49651064366773%"),
    height: hp("2.259013495848844%"),
    top: hp("21.813314312304076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.098626532355304%")
  },
  View_268_187: {
    width: wp("1.494700195705009%"),
    height: hp("2.258898696181916%"),
    top: hp("21.813314312304076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.1783058681672%")
  },
  ImageBackground_268_188: {
    width: wp("1.494700195705009%"),
    height: hp("2.258898696181916%"),
    top: hp("21.813314312304076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.1783058681672%")
  },
  ImageBackground_268_189: {
    width: wp("2.0040003049795265%"),
    height: hp("1.3779978019690438%"),
    top: hp("15.752351097178686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.051892835610936%")
  },
  ImageBackground_268_190: {
    width: wp("3.5415428627725585%"),
    height: hp("3.439884723914454%"),
    top: hp("13.614704765869906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.552307325160772%")
  },
  ImageBackground_268_191: {
    width: wp("3.5379244200286375%"),
    height: hp("2.2850789993907963%"),
    top: hp("13.612944504310345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.555918408360128%")
  },
  ImageBackground_268_192: {
    width: wp("4.5670107629904795%"),
    height: hp("3.6136053198930984%"),
    top: hp("12.247440732758623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.26083010952572%")
  },
  ImageBackground_268_193: {
    width: wp("0.19430424239474478%"),
    height: hp("0.18888611031176528%"),
    top: hp("18.063727591105017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.313774869372992%")
  },
  ImageBackground_268_194: {
    width: wp("0.19430424239474478%"),
    height: hp("0.18888491448190145%"),
    top: hp("18.026226366575237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.313774869372992%")
  },
  ImageBackground_268_195: {
    width: wp("0.19430424239474478%"),
    height: hp("0.18888611031176528%"),
    top: hp("24.00307969239812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.691648035570736%")
  },
  ImageBackground_268_196: {
    width: wp("0.19430424239474478%"),
    height: hp("0.18888611031176528%"),
    top: hp("23.965578467868344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.691648035570736%")
  },
  ImageBackground_268_197: {
    width: wp("0.1943066955762661%"),
    height: hp("0.1888908936312206%"),
    top: hp("25.573386069749215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.022376155546624%")
  },
  ImageBackground_268_198: {
    width: wp("0.1943066955762661%"),
    height: hp("0.18888611031176528%"),
    top: hp("25.535272580329153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.022376155546624%")
  },
  ImageBackground_268_199: {
    width: wp("0.1904208560465233%"),
    height: hp("1.6808931356687158%"),
    top: hp("19.655233640282134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.368515750602896%")
  },
  ImageBackground_268_200: {
    width: wp("0.7449674452999397%"),
    height: hp("3.402839110562794%"),
    top: hp("22.276110036246084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.919278160168808%")
  },
  ImageBackground_268_201: {
    width: wp("4.914372680271553%"),
    height: hp("1.3547700026939655%"),
    top: hp("36.87426528213166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.7138075261254%")
  },
  ImageBackground_268_202: {
    width: wp("4.5719539237559035%"),
    height: hp("2.609782682317178%"),
    top: hp("13.253009281935736%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.258946066117364%")
  },
  ImageBackground_268_206: {
    width: wp("4.0929064490020854%"),
    height: hp("2.095831748460154%"),
    top: hp("19.854066663401255%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.407210862138264%")
  },
  ImageBackground_268_207: {
    width: wp("6.9318875622519345%"),
    height: hp("2.3414910773872206%"),
    top: hp("19.53400519200627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.565759395096464%")
  },
  ImageBackground_268_208: {
    width: wp("4.899116344390575%"),
    height: hp("3.0870144643753674%"),
    top: hp("17.547511755485896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.126585736535368%")
  },
  ImageBackground_268_209: {
    width: wp("8.842701313963273%"),
    height: hp("9.251260309010089%"),
    top: hp("24.523964047805645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.817662278938908%")
  },
  ImageBackground_268_210: {
    width: wp("12.37640380859375%"),
    height: hp("15.795952249843873%"),
    top: hp("18.551243509992165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.873451944332796%")
  },
  ImageBackground_268_211: {
    width: wp("9.765951273142333%"),
    height: hp("13.25714446160487%"),
    top: hp("26.408668446316614%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.779450738545016%")
  },
  ImageBackground_268_212: {
    width: wp("1.515823315194182%"),
    height: hp("2.210314520474138%"),
    top: hp("32.13686569357367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.39948314409164%")
  },
  ImageBackground_268_213: {
    width: wp("0.33671633606938306%"),
    height: hp("0.654645100656348%"),
    top: hp("32.95569345121473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.820645347668808%")
  },
  ImageBackground_268_214: {
    width: wp("13.218193422176446%"),
    height: hp("7.082319110164821%"),
    top: hp("31.55995910070533%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.081503717845656%")
  },
  ImageBackground_268_215: {
    width: wp("9.177013532141782%"),
    height: hp("1.4318914622722374%"),
    top: hp("37.21154670356583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.122698326969456%")
  },
  ImageBackground_268_216: {
    width: wp("7.177233925969655%"),
    height: hp("1.3421396476721688%"),
    top: hp("36.58443438969436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.268045995779744%")
  },
  ImageBackground_268_217: {
    width: wp("0.8351611171121383%"),
    height: hp("1.0629181577867848%"),
    top: hp("36.43902147825235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.37938668106912%")
  },
  ImageBackground_268_218: {
    width: wp("0.8351611171121383%"),
    height: hp("1.0629181577867848%"),
    top: hp("35.78902576410658%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.37938668106912%")
  },
  ImageBackground_268_219: {
    width: wp("0.8351611171121383%"),
    height: hp("1.0629181577867848%"),
    top: hp("35.139642314851095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.37938668106912%")
  },
  ImageBackground_268_220: {
    width: wp("0.8351611171121383%"),
    height: hp("1.0629181577867848%"),
    top: hp("34.48972313381661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.37938668106912%")
  },
  ImageBackground_268_221: {
    width: wp("0.8351611171121383%"),
    height: hp("1.0629157661270572%"),
    top: hp("33.83980395278213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.37938668106912%")
  },
  ImageBackground_268_222: {
    width: wp("0.8351611171121383%"),
    height: hp("1.0629205494465126%"),
    top: hp("33.18980823863636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.37938668106912%")
  },
  ImageBackground_268_223: {
    width: wp("0.8351611171121383%"),
    height: hp("1.0629205494465126%"),
    top: hp("32.53988905760188%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.37938668106912%")
  },
  ImageBackground_268_224: {
    width: wp("4.003788497286977%"),
    height: hp("8.703079941130731%"),
    top: hp("25.474734889302507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.78501494674438%")
  },
  ImageBackground_268_225: {
    width: wp("4.001992768413384%"),
    height: hp("4.378992636749364%"),
    top: hp("29.798779143808776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.78689899015272%")
  },
  ImageBackground_268_226: {
    width: wp("4.938492974284378%"),
    height: hp("0.9233098045038206%"),
    top: hp("36.93817043005486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.14753001909164%")
  },
  ImageBackground_268_227: {
    width: wp("0.5744676497971514%"),
    height: hp("0.7320774759992164%"),
    top: hp("36.837835521159874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.28850984726688%")
  },
  ImageBackground_268_228: {
    width: wp("0.5744676497971514%"),
    height: hp("0.7320750843394886%"),
    top: hp("36.39088215125391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.28850984726688%")
  },
  ImageBackground_268_229: {
    width: wp("0.5744676497971514%"),
    height: hp("0.7320726926797609%"),
    top: hp("35.943852248236674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.28850984726688%")
  },
  ImageBackground_268_230: {
    width: wp("0.5744676497971514%"),
    height: hp("0.7320774759992164%"),
    top: hp("35.49628661344044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.28850984726688%")
  },
  ImageBackground_268_231: {
    width: wp("0.5744676497971514%"),
    height: hp("0.7320774759992164%"),
    top: hp("35.049333243534484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.28850984726688%")
  },
  ImageBackground_268_232: {
    width: wp("0.5744676497971514%"),
    height: hp("0.7320750843394886%"),
    top: hp("34.60230334051724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.28850984726688%")
  },
  ImageBackground_268_233: {
    width: wp("0.5744676497971514%"),
    height: hp("0.7320750843394886%"),
    top: hp("34.15534997061128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.28850984726688%")
  },
  ImageBackground_268_234: {
    width: wp("2.7552754932661148%"),
    height: hp("5.9900409375612265%"),
    top: hp("29.297793397335422%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.19176107817524%")
  },
  ImageBackground_268_235: {
    width: wp("2.7552761065614955%"),
    height: hp("3.0152371684585617%"),
    top: hp("32.269650641653605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.192938605305464%")
  },
  ImageBackground_268_236: {
    width: wp("3.610938461647156%"),
    height: hp("0.6745891511253429%"),
    top: hp("35.624785707288396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.8880878215434%")
  },
  ImageBackground_268_237: {
    width: wp("0.4199871296284666%"),
    height: hp("0.5349784061826509%"),
    top: hp("35.550854721786834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.453335384847264%")
  },
  ImageBackground_268_238: {
    width: wp("0.4199871296284666%"),
    height: hp("0.5349760145229232%"),
    top: hp("35.22413486971003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.453335384847264%")
  },
  ImageBackground_268_239: {
    width: wp("0.4199871296284666%"),
    height: hp("0.5349807978423785%"),
    top: hp("34.89741501763323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.453335384847264%")
  },
  ImageBackground_268_240: {
    width: wp("0.4199871296284666%"),
    height: hp("0.5349784061826509%"),
    top: hp("34.57069516555642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.453335384847264%")
  },
  ImageBackground_268_241: {
    width: wp("0.4199871296284666%"),
    height: hp("0.5349807978423785%"),
    top: hp("34.24336304858934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.453335384847264%")
  },
  ImageBackground_268_242: {
    width: wp("0.4199871296284666%"),
    height: hp("0.5349784061826509%"),
    top: hp("33.91656666340125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.453335384847264%")
  },
  ImageBackground_268_243: {
    width: wp("0.4199871296284666%"),
    height: hp("0.5349784061826509%"),
    top: hp("33.58984681132445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.453335384847264%")
  },
  ImageBackground_268_244: {
    width: wp("2.013088115925191%"),
    height: hp("4.371506741801773%"),
    top: hp("30.041465639694362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.652616936294216%")
  },
  ImageBackground_268_245: {
    width: wp("2.0130513182023715%"),
    height: hp("2.2031395412911445%"),
    top: hp("32.21102627840909%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.652616936294216%")
  },
  ImageBackground_268_246: {
    width: wp("1.8428839287957195%"),
    height: hp("1.791473615879549%"),
    top: hp("4.600099186912225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.314939836213824%")
  },
  ImageBackground_268_247: {
    width: wp("3.0895834183769595%"),
    height: hp("3.0033894840826436%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.9881619272508%")
  },
  ImageBackground_268_248: {
    width: wp("3.0895834183769595%"),
    height: hp("3.0033894840826436%"),
    top: hp("7.286717525470221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.943739323754023%")
  },
  ImageBackground_268_249: {
    width: wp("1.8428937415218047%"),
    height: hp("1.7914703273474237%"),
    top: hp("14.04436165262539%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.21510123593248%")
  },
  ImageBackground_268_250: {
    width: wp("3.0895760588323955%"),
    height: hp("3.003388886167712%"),
    top: hp("9.44426246571317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.294563906752416%")
  },
  ImageBackground_268_251: {
    width: wp("3.0895809651954385%"),
    height: hp("3.0033900819975754%"),
    top: hp("16.730979991183386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.339614524718655%")
  },
  ImageBackground_268_252: {
    width: wp("1.043936677301045%"),
    height: hp("1.0148159015141311%"),
    top: hp("16.055192618534484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.528646880024116%")
  },
  ImageBackground_268_253: {
    width: wp("1.7499549595872688%"),
    height: hp("1.701142122752988%"),
    top: hp("13.791572786050157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.413161299236332%")
  },
  ImageBackground_268_254: {
    width: wp("1.7499543462918887%"),
    height: hp("1.7011385352633963%"),
    top: hp("15.110774025274296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.225325311495176%")
  },
  ImageBackground_268_255: {
    width: wp("4.374888625558933%"),
    height: hp("4.252847533988355%"),
    top: hp("4.872863195532916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.851540519493572%")
  },
  ImageBackground_268_256: {
    width: wp("2.524760451730808%"),
    height: hp("2.4543319749981634%"),
    top: hp("16.565591937695924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.38831390675241%")
  },
  ImageBackground_268_257: {
    width: wp("2.5247653580938505%"),
    height: hp("2.4543307791682993%"),
    top: hp("22.431548785266457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68120101487138%")
  },
  View_280_0: {
    width: wp("69.45337620578779%"),
    minWidth: wp("69.45337620578779%"),
    minHeight: hp("10.344827586206897%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.434083601286176%"),
    top: hp("64.89028213166145%")
  },
  Text_280_0: {
    color: "rgba(190, 187, 187, 1)",
    fontSize: 9.180000305175781,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_280_1: {
    width: wp("74.91961414790997%"),
    minWidth: wp("74.91961414790997%"),
    height: hp("12.539184952978054%"),
    minHeight: hp("12.539184952978054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.540192926045016%"),
    top: hp("82.75862068965517%"),
    backgroundColor: "rgba(50, 201, 249, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_280_2: {
    width: wp("9.32475884244373%"),
    minWidth: wp("9.32475884244373%"),
    minHeight: hp("7.210031347962382%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.01607717041801%"),
    top: hp("85.26645768025078%")
  },
  Text_280_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.180000305175781,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
