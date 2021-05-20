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
      <View style={styles.View_301_180}>
        <View style={styles.View_I301_180_301_10}>
          <View style={styles.View_I301_180_301_11} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24cb/6ae5/37bf546194989d63627a392d13125a38"
            }}
            style={styles.ImageBackground_I301_180_301_12}
          />
          <View style={styles.View_I301_180_301_13} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a88a/ded7/f41dec7843b5fcad7f7bdcd0d1fba7b9"
          }}
          style={styles.ImageBackground_I301_180_301_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7587/2345/81cfec30b2ed2737e555bd1c76f92635"
          }}
          style={styles.ImageBackground_I301_180_301_18}
        />
        <View style={styles.View_I301_180_301_23}>
          <View style={styles.View_I301_180_301_24}>
            <Text style={styles.Text_I301_180_301_24}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_301_181}>
        <View style={styles.View_I301_181_301_44}>
          <View style={styles.View_I301_181_301_45} />
        </View>
        <View style={styles.View_I301_181_301_46}>
          <View style={styles.View_I301_181_301_47} />
        </View>
        <View style={styles.View_I301_181_301_48}>
          <View style={styles.View_I301_181_301_49}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a040/ed3c/e1837ef5506bbb669b610477fe1ec5c7"
              }}
              style={styles.ImageBackground_I301_181_301_50}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9614/28f4/03398241c899c8f1c368ea8a537f22dd"
              }}
              style={styles.ImageBackground_I301_181_301_56}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c8b/7e6f/4bee8332f587eb7c2a0f61d997c0026b"
              }}
              style={styles.ImageBackground_I301_181_301_57}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dde/aa05/87e19002ce8f62cb6df73d5b6700c1d4"
            }}
            style={styles.ImageBackground_I301_181_301_58}
          />
          <View style={styles.View_I301_181_301_65}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f280/7b8c/9a869a79fdc3a00d39b0bd6a457294ae"
              }}
              style={styles.ImageBackground_I301_181_301_66}
            />
            <View style={styles.View_I301_181_301_67}>
              <Text style={styles.Text_I301_181_301_67}>Go</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_68}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce1a/1c40/43db83a32ac998d422ffd6c40f7c7527"
              }}
              style={styles.ImageBackground_I301_181_301_69}
            />
            <View style={styles.View_I301_181_301_70}>
              <Text style={styles.Text_I301_181_301_70}>space</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_71}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a424/cb38/36e69281d5b3c5bb4d32ea29e582c81c"
              }}
              style={styles.ImageBackground_I301_181_301_72}
            />
            <View style={styles.View_I301_181_301_73}>
              <Text style={styles.Text_I301_181_301_73}>123</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_74}>
            <View style={styles.View_I301_181_301_75}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4da/0f28/6ccc1c0fb98f79633a472ddbae4ae008"
                }}
                style={styles.ImageBackground_I301_181_301_76}
              />
              <View style={styles.View_I301_181_301_77}>
                <Text style={styles.Text_I301_181_301_77}> </Text>
              </View>
            </View>
            <View style={styles.View_I301_181_301_78}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d09/bc7e/a4bd61730b6d0a18d23db7a365286c1a"
                }}
                style={styles.ImageBackground_I301_181_301_79}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3e/483d/f61114dc40b5ceee9a4ec60b337e0aa2"
                }}
                style={styles.ImageBackground_I301_181_301_82}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I301_181_301_83}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I301_181_301_84}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I301_181_301_85}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I301_181_301_86}
              />
            </View>
          </View>
          <View style={styles.View_I301_181_301_87}>
            <View style={styles.View_I301_181_301_88}>
              <View style={styles.View_I301_181_301_89} />
              <View style={styles.View_I301_181_301_90}>
                <Text style={styles.Text_I301_181_301_90}> </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d37/0f05/5c7ec7e047034cdced327d96694fb371"
              }}
              style={styles.ImageBackground_I301_181_301_91}
            />
          </View>
          <View style={styles.View_I301_181_301_92}>
            <View style={styles.View_I301_181_301_93} />
            <View style={styles.View_I301_181_301_94}>
              <Text style={styles.Text_I301_181_301_94}>M</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_95}>
            <View style={styles.View_I301_181_301_96} />
            <View style={styles.View_I301_181_301_97}>
              <Text style={styles.Text_I301_181_301_97}>N</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_98}>
            <View style={styles.View_I301_181_301_99} />
            <View style={styles.View_I301_181_301_100}>
              <Text style={styles.Text_I301_181_301_100}>B</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_101}>
            <View style={styles.View_I301_181_301_102} />
            <View style={styles.View_I301_181_301_103}>
              <Text style={styles.Text_I301_181_301_103}>V</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_104}>
            <View style={styles.View_I301_181_301_105} />
            <View style={styles.View_I301_181_301_106}>
              <Text style={styles.Text_I301_181_301_106}>C</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_107}>
            <View style={styles.View_I301_181_301_108} />
            <View style={styles.View_I301_181_301_109}>
              <Text style={styles.Text_I301_181_301_109}>X</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_110}>
            <View style={styles.View_I301_181_301_111} />
            <View style={styles.View_I301_181_301_112}>
              <Text style={styles.Text_I301_181_301_112}>Z</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_113}>
            <View style={styles.View_I301_181_301_114} />
            <View style={styles.View_I301_181_301_115}>
              <Text style={styles.Text_I301_181_301_115}>L</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_116}>
            <View style={styles.View_I301_181_301_117} />
            <View style={styles.View_I301_181_301_118}>
              <Text style={styles.Text_I301_181_301_118}>K</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_119}>
            <View style={styles.View_I301_181_301_120} />
            <View style={styles.View_I301_181_301_121}>
              <Text style={styles.Text_I301_181_301_121}>J</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_122}>
            <View style={styles.View_I301_181_301_123} />
            <View style={styles.View_I301_181_301_124}>
              <Text style={styles.Text_I301_181_301_124}>H</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_125}>
            <View style={styles.View_I301_181_301_126} />
            <View style={styles.View_I301_181_301_127}>
              <Text style={styles.Text_I301_181_301_127}>G</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_128}>
            <View style={styles.View_I301_181_301_129} />
            <View style={styles.View_I301_181_301_130}>
              <Text style={styles.Text_I301_181_301_130}>F</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_131}>
            <View style={styles.View_I301_181_301_132} />
            <View style={styles.View_I301_181_301_133}>
              <Text style={styles.Text_I301_181_301_133}>D</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_134}>
            <View style={styles.View_I301_181_301_135} />
            <View style={styles.View_I301_181_301_136}>
              <Text style={styles.Text_I301_181_301_136}>S</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_137}>
            <View style={styles.View_I301_181_301_138} />
            <View style={styles.View_I301_181_301_139}>
              <Text style={styles.Text_I301_181_301_139}>A</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_140}>
            <View style={styles.View_I301_181_301_141} />
            <View style={styles.View_I301_181_301_142}>
              <Text style={styles.Text_I301_181_301_142}>P</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_143}>
            <View style={styles.View_I301_181_301_144} />
            <View style={styles.View_I301_181_301_145}>
              <Text style={styles.Text_I301_181_301_145}>O</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_146}>
            <View style={styles.View_I301_181_301_147} />
            <View style={styles.View_I301_181_301_148}>
              <Text style={styles.Text_I301_181_301_148}>I</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_149}>
            <View style={styles.View_I301_181_301_150} />
            <View style={styles.View_I301_181_301_151}>
              <Text style={styles.Text_I301_181_301_151}>U</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_152}>
            <View style={styles.View_I301_181_301_153} />
            <View style={styles.View_I301_181_301_154}>
              <Text style={styles.Text_I301_181_301_154}>Y</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_155}>
            <View style={styles.View_I301_181_301_156} />
            <View style={styles.View_I301_181_301_157}>
              <Text style={styles.Text_I301_181_301_157}>T</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_158}>
            <View style={styles.View_I301_181_301_159} />
            <View style={styles.View_I301_181_301_160}>
              <Text style={styles.Text_I301_181_301_160}>R</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_161}>
            <View style={styles.View_I301_181_301_162} />
            <View style={styles.View_I301_181_301_163}>
              <Text style={styles.Text_I301_181_301_163}>E</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_164}>
            <View style={styles.View_I301_181_301_165} />
            <View style={styles.View_I301_181_301_166}>
              <Text style={styles.Text_I301_181_301_166}>W</Text>
            </View>
          </View>
          <View style={styles.View_I301_181_301_167}>
            <View style={styles.View_I301_181_301_168} />
            <View style={styles.View_I301_181_301_169}>
              <Text style={styles.Text_I301_181_301_169}>Q</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_301_182} />
      <View style={styles.View_301_183} />
      <View style={styles.View_301_184}>
        <Text style={styles.Text_301_184}>
          Let’s start from your phone number
        </Text>
      </View>
      <View style={styles.View_301_185}>
        <Text style={styles.Text_301_185}>+234</Text>
      </View>
      <View style={styles.View_301_186}>
        <Text style={styles.Text_301_186}>902 205 6960</Text>
      </View>
      <View style={styles.View_301_187}>
        <Text style={styles.Text_301_187}>
          Your number will be used only in urgent situations and won’t be
          forwarded to third parties.{" "}
        </Text>
      </View>
      <View style={styles.View_301_188}>
        <Text style={styles.Text_301_188}>
          By continuing you are indicating that you agree to the Terms and
          Privacy Policy.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("301_190"))
        }
      >
        <View style={styles.View_301_189}>
          <View style={styles.View_I301_189_301_39} />
          <View style={styles.View_I301_189_301_40}>
            <Text style={styles.Text_I301_189_301_40}>Continue</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_301_180: {
    width: wp("100%"),
    height: hp("6.632749630453808%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_180_301_10: {
    flexGrow: 1,
    width: wp("6.487476883303141%"),
    height: hp("1.7084356214179368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68889171950482%"),
    top: hp("2.6129050332991803%")
  },
  View_I301_180_301_11: {
    width: wp("5.866657938934178%"),
    height: hp("1.7084356214179368%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I301_180_301_12: {
    width: wp("0.35415133416364736%"),
    height: hp("0.602977262820051%"),
    top: hp("0.5527183657786883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.1333550347222285%")
  },
  View_I301_180_301_13: {
    width: wp("4.800002240904287%"),
    height: hp("1.1054586191646387%"),
    top: hp("0.30147364882172134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333352204106347%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I301_180_301_14: {
    flexGrow: 1,
    width: wp("4.088876328030646%"),
    height: hp("1.6581905344144894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666996905193%"),
    top: hp("2.6125048027663933%")
  },
  ImageBackground_I301_180_301_18: {
    flexGrow: 1,
    width: wp("4.533334630698974%"),
    height: hp("1.6079412783429923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.39998254453504%"),
    top: hp("2.6631339651639343%")
  },
  View_I301_180_301_23: {
    flexGrow: 1,
    width: wp("14.400001194166101%"),
    height: hp("3.165630434380203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311595%"),
    top: hp("1.055207799692623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_180_301_24: {
    width: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.819672131147541%")
  },
  Text_I301_180_301_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_301_181: {
    width: wp("100%"),
    height: hp("43.85245901639344%"),
    top: hp("78.55191256830601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(204, 206, 211, 1)"
  },
  View_I301_181_301_44: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("43.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_45: {
    width: wp("100%"),
    height: hp("43.85245901639344%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(209, 213, 219, 1)"
  },
  View_I301_181_301_46: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.123655392172558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.72880779328892%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_47: {
    width: wp("32.367149758454104%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("3.4153005464481083%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_48: {
    flexGrow: 1,
    width: wp("98.39999433876811%"),
    height: hp("39.03019806074966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.800002830615942%"),
    top: hp("1.2055610698429007%")
  },
  View_I301_181_301_49: {
    width: wp("3.9999994102883454%"),
    height: hp("3.7673908504632%"),
    top: hp("35.11209123121584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2000136813104%")
  },
  ImageBackground_I301_181_301_50: {
    width: wp("3.9999994102883454%"),
    height: hp("2.210439880037568%"),
    top: hp("1.5569634776297931%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I301_181_301_56: {
    width: wp("2.4019692830993358%"),
    height: hp("2.7118995541431863%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000028306159379%")
  },
  ImageBackground_I301_181_301_57: {
    width: wp("1.5129126212447161%"),
    height: hp("2.210439880037568%"),
    top: hp("0.25127806950138165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2442915911835684%")
  },
  ImageBackground_I301_181_301_58: {
    width: wp("7.20000013637082%"),
    height: hp("4.068785286991973%"),
    top: hp("34.96140443562159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866687424516908%")
  },
  View_I301_181_301_65: {
    width: wp("23.466661241319446%"),
    height: hp("6.329220631083504%"),
    top: hp("24.412695045679655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93336258303141%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I301_181_301_66: {
    flexGrow: 1,
    width: wp("23.42995169082126%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I301_181_301_67: {
    flexGrow: 1,
    width: wp("21.256038647342994%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_181_301_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I301_181_301_68: {
    width: wp("48.53333182956862%"),
    height: hp("6.329220631083504%"),
    top: hp("24.412695045679655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.799969806763283%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I301_181_301_69: {
    flexGrow: 1,
    width: wp("48.55072463768116%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I301_181_301_70: {
    flexGrow: 1,
    width: wp("43.96135265700483%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_181_301_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I301_181_301_71: {
    width: wp("23.20000100250981%"),
    height: hp("6.329220631083504%"),
    top: hp("24.412695045679655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I301_181_301_72: {
    flexGrow: 1,
    width: wp("23.18840579710145%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I301_181_301_73: {
    flexGrow: 1,
    width: wp("21.014492753623188%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_181_301_73: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I301_181_301_74: {
    width: wp("11.199995400249094%"),
    height: hp("6.329221673350517%"),
    top: hp("16.275141147967886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2000136813104%")
  },
  View_I301_181_301_75: {
    width: wp("11.199995400249094%"),
    height: hp("6.329221673350517%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I301_181_301_76: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I301_181_301_77: {
    flexGrow: 1,
    width: wp("10.144927536231885%"),
    top: hp("1.5027322404371688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I301_181_301_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I301_181_301_78: {
    width: wp("6.042664753642059%"),
    height: hp("2.5609501072617826%"),
    top: hp("1.9077988921618925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.575978449577292%")
  },
  ImageBackground_I301_181_301_79: {
    width: wp("6.042664753642059%"),
    height: hp("2.5609501072617826%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I301_181_301_82: {
    width: wp("1.7841799823558273%"),
    height: hp("1.0073114614017675%"),
    top: hp("0.7758802403517677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.761324822614725%")
  },
  ImageBackground_I301_181_301_83: {
    width: wp("0.3007013440708031%"),
    height: hp("0.17007296202612704%"),
    top: hp("0.7498652557206356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.287085786533822%")
  },
  ImageBackground_I301_181_301_84: {
    width: wp("0.30211665204181765%"),
    height: hp("0.1707337593120304%"),
    top: hp("1.6361757705771964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7173323331823696%")
  },
  ImageBackground_I301_181_301_85: {
    width: wp("0.300959342919686%"),
    height: hp("0.1699312137124317%"),
    top: hp("1.6371429943647513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.289680517814006%")
  },
  ImageBackground_I301_181_301_86: {
    width: wp("0.30213139483318235%"),
    height: hp("0.17073167477800547%"),
    top: hp("0.7500653709870306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7201629491244006%")
  },
  View_I301_181_301_87: {
    width: wp("11.200000007371395%"),
    height: hp("6.329221673350517%"),
    top: hp("16.275141147967886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I301_181_301_88: {
    width: wp("11.200000007371395%"),
    height: hp("6.329221673350517%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_89: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_90: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.876207729468598%"),
    top: hp("1.092896174863398%")
  },
  Text_I301_181_301_90: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  ImageBackground_I301_181_301_91: {
    width: wp("5.034666936754604%"),
    height: hp("2.4798888326342636%"),
    top: hp("1.8384923049009672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1093136699879227%")
  },
  View_I301_181_301_92: {
    width: wp("8.533334040987318%"),
    height: hp("6.329221673350517%"),
    top: hp("16.275141147967886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.19997122207127%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_93: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_94: {
    width: wp("4.830917874396135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4492753623188293%"),
    top: hp("1.092896174863398%")
  },
  Text_I301_181_301_94: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_95: {
    width: wp("8.533341412383%"),
    height: hp("6.329221673350517%"),
    top: hp("16.275141147967886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666100543478%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_96: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_97: {
    width: wp("4.1062801932367154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584627%"),
    top: hp("1.092896174863398%")
  },
  Text_I301_181_301_97: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_98: {
    width: wp("8.53333772668516%"),
    height: hp("6.329221673350517%"),
    top: hp("16.275141147967886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93335078879831%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_99: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_100: {
    width: wp("3.6231884057971016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478258%"),
    top: hp("1.092896174863398%")
  },
  Text_I301_181_301_100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_101: {
    width: wp("8.533334040987318%"),
    height: hp("6.329221673350517%"),
    top: hp("16.275141147967886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06664921120169%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_102: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_103: {
    width: wp("3.864734299516908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584485%"),
    top: hp("1.092896174863398%")
  },
  Text_I301_181_301_103: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_104: {
    width: wp("8.533334040987318%"),
    height: hp("6.329221673350517%"),
    top: hp("16.275141147967886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333899456521%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_105: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_106: {
    width: wp("4.1062801932367154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584627%"),
    top: hp("1.092896174863398%")
  },
  Text_I301_181_301_106: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_107: {
    width: wp("8.533334040987318%"),
    height: hp("6.329221673350517%"),
    top: hp("16.275141147967886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066637416968604%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_108: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_109: {
    width: wp("3.864734299516908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584485%"),
    top: hp("1.092896174863398%")
  },
  Text_I301_181_301_109: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_110: {
    width: wp("8.533332198138398%"),
    height: hp("6.329221673350517%"),
    top: hp("16.275141147967886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933327200332126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_111: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_112: {
    width: wp("3.6231884057971016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1739130434782616%"),
    top: hp("1.092896174863398%")
  },
  Text_I301_181_301_112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_113: {
    width: wp("8.533334040987318%"),
    height: hp("6.329219588816491%"),
    top: hp("8.137553897711754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06667279966788%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_114: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_115: {
    width: wp("3.140096618357488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_115: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_116: {
    width: wp("8.533334040987318%"),
    height: hp("6.329219588816491%"),
    top: hp("8.137553897711754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93336258303141%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_117: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_118: {
    width: wp("3.6231884057971016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478251%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_118: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_119: {
    width: wp("8.533341412383%"),
    height: hp("6.329219588816491%"),
    top: hp("8.137553897711754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666100543478%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_120: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_121: {
    width: wp("3.140096618357488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_121: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_122: {
    width: wp("8.53333772668516%"),
    height: hp("6.329219588816491%"),
    top: hp("8.137553897711754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93335078879831%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_123: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_124: {
    width: wp("4.1062801932367154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584485%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_125: {
    width: wp("8.533334040987318%"),
    height: hp("6.329219588816491%"),
    top: hp("8.137553897711754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06664921120169%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_126: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_127: {
    width: wp("4.1062801932367154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584485%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_127: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_128: {
    width: wp("8.533334040987318%"),
    height: hp("6.329219588816491%"),
    top: hp("8.137553897711754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333899456521%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_129: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_130: {
    width: wp("3.140096618357488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_130: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_131: {
    width: wp("8.533334040987318%"),
    height: hp("6.329219588816491%"),
    top: hp("8.137553897711754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066637416968604%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_132: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_133: {
    width: wp("4.1062801932367154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584485%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_134: {
    width: wp("8.533332198138398%"),
    height: hp("6.329219588816491%"),
    top: hp("8.137553897711754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933327200332126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_135: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_136: {
    width: wp("3.6231884057971016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1739130434782616%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_136: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_137: {
    width: wp("8.533334040987318%"),
    height: hp("6.329219588816491%"),
    top: hp("8.137553897711754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066684593900965%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_138: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_139: {
    width: wp("3.864734299516908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584538%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_140: {
    width: wp("8.533326669591638%"),
    height: hp("6.329220631083504%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86668978336354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_141: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_142: {
    width: wp("3.6231884057971016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478251%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_143: {
    width: wp("8.533326669591638%"),
    height: hp("6.329220631083504%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.99998820576691%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_144: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_145: {
    width: wp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_145: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_146: {
    width: wp("8.533334040987318%"),
    height: hp("6.329220631083504%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86667798913044%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_147: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_148: {
    width: wp("1.6908212560386473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574894%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_148: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_149: {
    width: wp("8.53333772668516%"),
    height: hp("6.329220631083504%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.999976411533815%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_150: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_151: {
    width: wp("4.1062801932367154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584485%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_151: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_152: {
    width: wp("8.533334040987318%"),
    height: hp("6.329220631083504%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.86666619489734%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_153: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_154: {
    width: wp("3.6231884057971016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478265%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_155: {
    width: wp("8.533334040987318%"),
    height: hp("6.329220631083504%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.00002358846618%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_156: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_157: {
    width: wp("3.6231884057971016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478258%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_158: {
    width: wp("8.533334040987318%"),
    height: hp("6.329220631083504%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86665440066425%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_159: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_160: {
    width: wp("3.6231884057971016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478258%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_160: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_161: {
    width: wp("8.533334040987318%"),
    height: hp("6.329220631083504%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000011794233092%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_162: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_163: {
    width: wp("3.3816425120772946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1739130434782616%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_163: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_164: {
    width: wp("8.533333119562858%"),
    height: hp("6.329220631083504%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.86664260643116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_165: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_166: {
    width: wp("5.314009661835748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_166: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I301_181_301_167: {
    width: wp("8.533333119562858%"),
    height: hp("6.329220631083504%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_181_301_168: {
    flexGrow: 1,
    width: wp("8.454106280193237%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_181_301_169: {
    width: wp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386473%"),
    top: hp("1.0928961748633839%")
  },
  Text_I301_181_301_169: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_182: {
    width: wp("16.000001326851223%"),
    height: hp("7.537216436667521%"),
    top: hp("44.77105479422814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599974996225844%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_301_183: {
    width: wp("58.39999655018681%"),
    height: hp("7.537216436667521%"),
    top: hp("44.77105479422814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.999995282306763%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_301_184: {
    width: wp("74.66667285863903%"),
    top: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671497%")
  },
  Text_301_184: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_185: {
    width: wp("13.043478260869565%"),
    top: hp("45.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352657%")
  },
  Text_301_185: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_186: {
    width: wp("36.26666598849827%"),
    top: hp("45.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.05797101449276%")
  },
  Text_301_186: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_187: {
    width: wp("80.79999840777853%"),
    top: hp("27.133962495730874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599974996225844%")
  },
  Text_301_187: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_301_188: {
    width: wp("80.79999840777853%"),
    top: hp("70.69905598958334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599974996225844%")
  },
  Text_301_188: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_301_189: {
    width: wp("80.79999840777853%"),
    height: hp("7.537216436667521%"),
    top: hp("56.07686694202527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599974996225844%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_189_301_39: {
    flexGrow: 1,
    width: wp("80.79999840777853%"),
    height: hp("7.537216436667521%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(50, 201, 249, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I301_189_301_40: {
    flexGrow: 1,
    width: wp("73.26180278391078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.769083069142514%"),
    top: hp("2.322404371584696%")
  },
  Text_I301_189_301_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
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
