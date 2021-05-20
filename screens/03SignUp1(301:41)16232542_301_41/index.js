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
      <View style={styles.View_301_42}>
        <View style={styles.View_I301_42_301_10}>
          <View style={styles.View_I301_42_301_11} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24cb/6ae5/37bf546194989d63627a392d13125a38"
            }}
            style={styles.ImageBackground_I301_42_301_12}
          />
          <View style={styles.View_I301_42_301_13} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a88a/ded7/f41dec7843b5fcad7f7bdcd0d1fba7b9"
          }}
          style={styles.ImageBackground_I301_42_301_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7587/2345/81cfec30b2ed2737e555bd1c76f92635"
          }}
          style={styles.ImageBackground_I301_42_301_18}
        />
        <View style={styles.View_I301_42_301_23}>
          <View style={styles.View_I301_42_301_24}>
            <Text style={styles.Text_I301_42_301_24}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_301_43}>
        <View style={styles.View_301_44}>
          <View style={styles.View_301_45} />
        </View>
        <View style={styles.View_301_46}>
          <View style={styles.View_301_47} />
        </View>
        <View style={styles.View_301_48}>
          <View style={styles.View_301_49}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32c0/3cd5/888fccf78a462b7442e87b776148d09a"
              }}
              style={styles.ImageBackground_301_50}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9614/28f4/03398241c899c8f1c368ea8a537f22dd"
              }}
              style={styles.ImageBackground_301_56}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ab6/1766/4fb1d264e241e7173ebcdb8f5d72855e"
              }}
              style={styles.ImageBackground_301_57}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78e7/cd93/0448c6154e887bf41e37bfef7b435e1c"
            }}
            style={styles.ImageBackground_301_58}
          />
          <View style={styles.View_301_65}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f280/7b8c/9a869a79fdc3a00d39b0bd6a457294ae"
              }}
              style={styles.ImageBackground_301_66}
            />
            <View style={styles.View_301_67}>
              <Text style={styles.Text_301_67}>Go</Text>
            </View>
          </View>
          <View style={styles.View_301_68}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce1a/1c40/43db83a32ac998d422ffd6c40f7c7527"
              }}
              style={styles.ImageBackground_301_69}
            />
            <View style={styles.View_301_70}>
              <Text style={styles.Text_301_70}>space</Text>
            </View>
          </View>
          <View style={styles.View_301_71}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a424/cb38/36e69281d5b3c5bb4d32ea29e582c81c"
              }}
              style={styles.ImageBackground_301_72}
            />
            <View style={styles.View_301_73}>
              <Text style={styles.Text_301_73}>123</Text>
            </View>
          </View>
          <View style={styles.View_301_74}>
            <View style={styles.View_301_75}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4da/0f28/6ccc1c0fb98f79633a472ddbae4ae008"
                }}
                style={styles.ImageBackground_301_76}
              />
              <View style={styles.View_301_77}>
                <Text style={styles.Text_301_77}> </Text>
              </View>
            </View>
            <View style={styles.View_301_78}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d09/bc7e/a4bd61730b6d0a18d23db7a365286c1a"
                }}
                style={styles.ImageBackground_301_79}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3e/483d/f61114dc40b5ceee9a4ec60b337e0aa2"
                }}
                style={styles.ImageBackground_301_82}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_301_83}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_301_84}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_301_85}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_301_86}
              />
            </View>
          </View>
          <View style={styles.View_301_87}>
            <View style={styles.View_301_88}>
              <View style={styles.View_301_89} />
              <View style={styles.View_301_90}>
                <Text style={styles.Text_301_90}> </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d37/0f05/5c7ec7e047034cdced327d96694fb371"
              }}
              style={styles.ImageBackground_301_91}
            />
          </View>
          <View style={styles.View_301_92}>
            <View style={styles.View_301_93} />
            <View style={styles.View_301_94}>
              <Text style={styles.Text_301_94}>M</Text>
            </View>
          </View>
          <View style={styles.View_301_95}>
            <View style={styles.View_301_96} />
            <View style={styles.View_301_97}>
              <Text style={styles.Text_301_97}>N</Text>
            </View>
          </View>
          <View style={styles.View_301_98}>
            <View style={styles.View_301_99} />
            <View style={styles.View_301_100}>
              <Text style={styles.Text_301_100}>B</Text>
            </View>
          </View>
          <View style={styles.View_301_101}>
            <View style={styles.View_301_102} />
            <View style={styles.View_301_103}>
              <Text style={styles.Text_301_103}>V</Text>
            </View>
          </View>
          <View style={styles.View_301_104}>
            <View style={styles.View_301_105} />
            <View style={styles.View_301_106}>
              <Text style={styles.Text_301_106}>C</Text>
            </View>
          </View>
          <View style={styles.View_301_107}>
            <View style={styles.View_301_108} />
            <View style={styles.View_301_109}>
              <Text style={styles.Text_301_109}>X</Text>
            </View>
          </View>
          <View style={styles.View_301_110}>
            <View style={styles.View_301_111} />
            <View style={styles.View_301_112}>
              <Text style={styles.Text_301_112}>Z</Text>
            </View>
          </View>
          <View style={styles.View_301_113}>
            <View style={styles.View_301_114} />
            <View style={styles.View_301_115}>
              <Text style={styles.Text_301_115}>L</Text>
            </View>
          </View>
          <View style={styles.View_301_116}>
            <View style={styles.View_301_117} />
            <View style={styles.View_301_118}>
              <Text style={styles.Text_301_118}>K</Text>
            </View>
          </View>
          <View style={styles.View_301_119}>
            <View style={styles.View_301_120} />
            <View style={styles.View_301_121}>
              <Text style={styles.Text_301_121}>J</Text>
            </View>
          </View>
          <View style={styles.View_301_122}>
            <View style={styles.View_301_123} />
            <View style={styles.View_301_124}>
              <Text style={styles.Text_301_124}>H</Text>
            </View>
          </View>
          <View style={styles.View_301_125}>
            <View style={styles.View_301_126} />
            <View style={styles.View_301_127}>
              <Text style={styles.Text_301_127}>G</Text>
            </View>
          </View>
          <View style={styles.View_301_128}>
            <View style={styles.View_301_129} />
            <View style={styles.View_301_130}>
              <Text style={styles.Text_301_130}>F</Text>
            </View>
          </View>
          <View style={styles.View_301_131}>
            <View style={styles.View_301_132} />
            <View style={styles.View_301_133}>
              <Text style={styles.Text_301_133}>D</Text>
            </View>
          </View>
          <View style={styles.View_301_134}>
            <View style={styles.View_301_135} />
            <View style={styles.View_301_136}>
              <Text style={styles.Text_301_136}>S</Text>
            </View>
          </View>
          <View style={styles.View_301_137}>
            <View style={styles.View_301_138} />
            <View style={styles.View_301_139}>
              <Text style={styles.Text_301_139}>A</Text>
            </View>
          </View>
          <View style={styles.View_301_140}>
            <View style={styles.View_301_141} />
            <View style={styles.View_301_142}>
              <Text style={styles.Text_301_142}>P</Text>
            </View>
          </View>
          <View style={styles.View_301_143}>
            <View style={styles.View_301_144} />
            <View style={styles.View_301_145}>
              <Text style={styles.Text_301_145}>O</Text>
            </View>
          </View>
          <View style={styles.View_301_146}>
            <View style={styles.View_301_147} />
            <View style={styles.View_301_148}>
              <Text style={styles.Text_301_148}>I</Text>
            </View>
          </View>
          <View style={styles.View_301_149}>
            <View style={styles.View_301_150} />
            <View style={styles.View_301_151}>
              <Text style={styles.Text_301_151}>U</Text>
            </View>
          </View>
          <View style={styles.View_301_152}>
            <View style={styles.View_301_153} />
            <View style={styles.View_301_154}>
              <Text style={styles.Text_301_154}>Y</Text>
            </View>
          </View>
          <View style={styles.View_301_155}>
            <View style={styles.View_301_156} />
            <View style={styles.View_301_157}>
              <Text style={styles.Text_301_157}>T</Text>
            </View>
          </View>
          <View style={styles.View_301_158}>
            <View style={styles.View_301_159} />
            <View style={styles.View_301_160}>
              <Text style={styles.Text_301_160}>R</Text>
            </View>
          </View>
          <View style={styles.View_301_161}>
            <View style={styles.View_301_162} />
            <View style={styles.View_301_163}>
              <Text style={styles.Text_301_163}>E</Text>
            </View>
          </View>
          <View style={styles.View_301_164}>
            <View style={styles.View_301_165} />
            <View style={styles.View_301_166}>
              <Text style={styles.Text_301_166}>W</Text>
            </View>
          </View>
          <View style={styles.View_301_167}>
            <View style={styles.View_301_168} />
            <View style={styles.View_301_169}>
              <Text style={styles.Text_301_169}>Q</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_301_170} />
      <View style={styles.View_301_171} />
      <View style={styles.View_301_172}>
        <Text style={styles.Text_301_172}>
          Let’s start from your phone number
        </Text>
      </View>
      <View style={styles.View_301_173}>
        <Text style={styles.Text_301_173}>+1</Text>
      </View>
      <View style={styles.View_301_174}>
        <Text style={styles.Text_301_174}>Phone number</Text>
      </View>
      <View style={styles.View_301_175}>
        <Text style={styles.Text_301_175}>
          Your number will be used only in urgent situations and won’t be
          forwarded to third parties.{" "}
        </Text>
      </View>
      <View style={styles.View_301_176}>
        <Text style={styles.Text_301_176}>
          By continuing you are indicating that you agree to the Terms and
          Privacy Policy.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("301_179"))
        }
      >
        <View style={styles.View_301_177}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee46/b29f/0d8f8779990d9d13ef109a9ee6c52f9e"
            }}
            style={styles.ImageBackground_I301_177_301_39}
          />
          <View style={styles.View_I301_177_301_40}>
            <Text style={styles.Text_I301_177_301_40}>Continue</Text>
          </View>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/737c/830d/45189ababf45dcfad37ed348db63d659"
        }}
        style={styles.ImageBackground_301_178}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_301_42: {
    width: wp("100%"),
    height: hp("6.632749630453808%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_42_301_10: {
    flexGrow: 1,
    width: wp("6.487476883303141%"),
    height: hp("1.7084356214179368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68889171950482%"),
    top: hp("2.6129050332991803%")
  },
  View_I301_42_301_11: {
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
  ImageBackground_I301_42_301_12: {
    width: wp("0.35415133416364736%"),
    height: hp("0.602977262820051%"),
    top: hp("0.5527183657786883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.1333550347222285%")
  },
  View_I301_42_301_13: {
    width: wp("4.800002240904287%"),
    height: hp("1.1054586191646387%"),
    top: hp("0.30147364882172134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333352204106347%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I301_42_301_14: {
    flexGrow: 1,
    width: wp("4.088876328030646%"),
    height: hp("1.6581905344144894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666996905193%"),
    top: hp("2.6125048027663933%")
  },
  ImageBackground_I301_42_301_18: {
    flexGrow: 1,
    width: wp("4.533334630698974%"),
    height: hp("1.6079412783429923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.39998254453504%"),
    top: hp("2.6631339651639343%")
  },
  View_I301_42_301_23: {
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
  View_I301_42_301_24: {
    width: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.819672131147541%")
  },
  Text_I301_42_301_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_301_43: {
    width: wp("100%"),
    height: hp("43.86658381894638%"),
    top: hp("78.53777108948088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(204, 206, 211, 1)"
  },
  View_301_44: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("43.86658381894638%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_45: {
    width: wp("100%"),
    height: hp("43.86658381894638%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(209, 213, 219, 1)"
  },
  View_301_46: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.125306343120304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.741281644894116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_47: {
    width: wp("32.367149758454104%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("3.415300546448094%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_301_48: {
    flexGrow: 1,
    width: wp("98.39999433876811%"),
    height: hp("39.04276780092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.800002830615942%"),
    top: hp("1.2059613003756766%")
  },
  View_301_49: {
    width: wp("3.9999994102883454%"),
    height: hp("3.7686040492657105%"),
    top: hp("35.12343109631148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2000136813104%")
  },
  ImageBackground_301_50: {
    width: wp("3.9999994102883454%"),
    height: hp("2.211152790674095%"),
    top: hp("1.5574637657957737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_301_56: {
    width: wp("2.4019692830993358%"),
    height: hp("2.7127750584336576%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000028306159379%")
  },
  ImageBackground_301_57: {
    width: wp("1.5129126212447161%"),
    height: hp("2.211152790674095%"),
    top: hp("0.25137812713455787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2442915911835684%")
  },
  ImageBackground_301_58: {
    width: wp("7.20000013637082%"),
    height: hp("4.070094374359631%"),
    top: hp("34.97267759562841%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866687424516908%")
  },
  View_301_65: {
    width: wp("23.466661241319446%"),
    height: hp("6.331259305359888%"),
    top: hp("24.42056624615779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93336258303141%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_301_66: {
    flexGrow: 1,
    width: wp("23.42995169082126%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_301_67: {
    flexGrow: 1,
    width: wp("23.42995169082126%"),
    top: hp("1.6581884498804556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_301_68: {
    width: wp("48.53333182956862%"),
    height: hp("6.331259305359888%"),
    top: hp("24.42056624615779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.799969806763283%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_301_69: {
    flexGrow: 1,
    width: wp("48.55072463768116%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_301_70: {
    flexGrow: 1,
    width: wp("48.55072463768116%"),
    top: hp("1.6581884498804556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_301_71: {
    width: wp("23.20000100250981%"),
    height: hp("6.331259305359888%"),
    top: hp("24.42056624615779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_301_72: {
    flexGrow: 1,
    width: wp("23.18840579710145%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_301_73: {
    flexGrow: 1,
    width: wp("23.18840579710145%"),
    top: hp("1.6581884498804556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_73: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_301_74: {
    width: wp("11.199995400249094%"),
    height: hp("6.331260347626899%"),
    top: hp("16.280377497438522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2000136813104%")
  },
  View_301_75: {
    width: wp("11.199995400249094%"),
    height: hp("6.331260347626899%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_301_76: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_301_77: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    top: hp("1.6581884498804556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_301_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_301_78: {
    width: wp("6.042664753642059%"),
    height: hp("2.5617755827356556%"),
    top: hp("1.9084325905054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.575978449577292%")
  },
  ImageBackground_301_79: {
    width: wp("6.042664753642059%"),
    height: hp("2.5617755827356556%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_301_82: {
    width: wp("1.7841799823558273%"),
    height: hp("1.007634564175632%"),
    top: hp("0.7761137081625833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.761324822614725%")
  },
  ImageBackground_301_83: {
    width: wp("0.3007013440708031%"),
    height: hp("0.17012715991077526%"),
    top: hp("0.750132076075829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.287085786533822%")
  },
  ImageBackground_301_84: {
    width: wp("0.30211665204181765%"),
    height: hp("0.17078795719667864%"),
    top: hp("1.636676058743177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7173323331823696%")
  },
  ImageBackground_301_85: {
    width: wp("0.300959342919686%"),
    height: hp("0.16998541159707992%"),
    top: hp("1.6376766350751382%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.289680517814006%")
  },
  ImageBackground_301_86: {
    width: wp("0.30213139483318235%"),
    height: hp("0.1707858726626537%"),
    top: hp("0.7502988387978178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7201629491244006%")
  },
  View_301_87: {
    width: wp("11.200000007371395%"),
    height: hp("6.331260347626899%"),
    top: hp("16.280377497438522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_88: {
    width: wp("11.200000007371395%"),
    height: hp("6.331260347626899%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_89: {
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
  View_301_90: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.383359752415458%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_90: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  ImageBackground_301_91: {
    width: wp("5.034666936754604%"),
    height: hp("2.4806872091658128%"),
    top: hp("1.8390926507001382%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1093136699879227%")
  },
  View_301_92: {
    width: wp("8.533334040987318%"),
    height: hp("6.331260347626899%"),
    top: hp("16.280377497438522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.19997122207127%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_93: {
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
  View_301_94: {
    width: wp("5.333333775617074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000056612318758%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_94: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_95: {
    width: wp("8.533341412383%"),
    height: hp("6.331260347626899%"),
    top: hp("16.280377497438522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666100543478%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_96: {
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
  View_301_97: {
    width: wp("4.533337394972355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333408816425248%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_97: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_98: {
    width: wp("8.53333772668516%"),
    height: hp("6.331260347626899%"),
    top: hp("16.280377497438522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93335078879831%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_99: {
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
  View_301_100: {
    width: wp("4.000002174561726%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400008491847821%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_101: {
    width: wp("8.533334040987318%"),
    height: hp("6.331260347626899%"),
    top: hp("16.280377497438522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06664921120169%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_102: {
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
  View_301_103: {
    width: wp("4.266667020493659%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333408816425035%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_103: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_104: {
    width: wp("8.533334040987318%"),
    height: hp("6.331260347626899%"),
    top: hp("16.280377497438522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333899456521%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_105: {
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
  View_301_106: {
    width: wp("4.533333709274514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333408816425177%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_106: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_107: {
    width: wp("8.533334040987318%"),
    height: hp("6.331260347626899%"),
    top: hp("16.280377497438522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066637416968604%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_108: {
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
  View_301_109: {
    width: wp("4.266667020493659%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133340881642507%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_109: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_110: {
    width: wp("8.533332198138398%"),
    height: hp("6.331260347626899%"),
    top: hp("16.280377497438522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933327200332126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_111: {
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
  View_301_112: {
    width: wp("3.9999994102883454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400008491847828%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_113: {
    width: wp("8.533334040987318%"),
    height: hp("6.331258263092875%"),
    top: hp("8.140188748719254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06667279966788%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_114: {
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
  View_301_115: {
    width: wp("3.4666669541510986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666676102053131%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_115: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_116: {
    width: wp("8.533334040987318%"),
    height: hp("6.331258263092875%"),
    top: hp("8.140188748719254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93336258303141%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_117: {
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
  View_301_118: {
    width: wp("4.000000331712806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400008491847828%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_118: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_119: {
    width: wp("8.533341412383%"),
    height: hp("6.331258263092875%"),
    top: hp("8.140188748719254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666100543478%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_120: {
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
  View_301_121: {
    width: wp("3.466670179136709%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666761020531453%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_121: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_122: {
    width: wp("8.53333772668516%"),
    height: hp("6.331258263092875%"),
    top: hp("8.140188748719254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93335078879831%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_123: {
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
  View_301_124: {
    width: wp("4.533335552123434%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333408816425035%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_125: {
    width: wp("8.533334040987318%"),
    height: hp("6.331258263092875%"),
    top: hp("8.140188748719254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06664921120169%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_126: {
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
  View_301_127: {
    width: wp("4.533333709274514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333408816425035%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_127: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_128: {
    width: wp("8.533334040987318%"),
    height: hp("6.331258263092875%"),
    top: hp("8.140188748719254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333899456521%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_129: {
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
  View_301_130: {
    width: wp("3.4666669541510986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666676102053138%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_130: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_131: {
    width: wp("8.533334040987318%"),
    height: hp("6.331258263092875%"),
    top: hp("8.140188748719254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066637416968604%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_132: {
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
  View_301_133: {
    width: wp("4.533333709274514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133340881642507%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_134: {
    width: wp("8.533332198138398%"),
    height: hp("6.331258263092875%"),
    top: hp("8.140188748719254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933327200332126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_135: {
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
  View_301_136: {
    width: wp("3.9999994102883454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400008491847828%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_136: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_137: {
    width: wp("8.533334040987318%"),
    height: hp("6.331258263092875%"),
    top: hp("8.140188748719254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066684593900965%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_138: {
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
  View_301_139: {
    width: wp("4.266667020493659%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333408816425123%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_140: {
    width: wp("8.533326669591638%"),
    height: hp("6.331259305359888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86668978336354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_141: {
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
  View_301_142: {
    width: wp("3.9999966460149645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000084918478137%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_143: {
    width: wp("8.533326669591638%"),
    height: hp("6.331259305359888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.99998820576691%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_144: {
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
  View_301_145: {
    width: wp("4.799996712357526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666732714371932%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_145: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_146: {
    width: wp("8.533334040987318%"),
    height: hp("6.331259305359888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86667798913044%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_147: {
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
  View_301_148: {
    width: wp("1.866666821465976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666789326690832%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_148: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_149: {
    width: wp("8.53333772668516%"),
    height: hp("6.331259305359888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.999976411533815%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_150: {
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
  View_301_151: {
    width: wp("4.533335552123434%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333408816425106%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_151: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_152: {
    width: wp("8.533334040987318%"),
    height: hp("6.331259305359888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.86666619489734%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_153: {
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
  View_301_154: {
    width: wp("4.000000331712806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400008491847828%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_155: {
    width: wp("8.533334040987318%"),
    height: hp("6.331259305359888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.00002358846618%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_156: {
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
  View_301_157: {
    width: wp("4.000000331712806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400008491847828%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_158: {
    width: wp("8.533334040987318%"),
    height: hp("6.331259305359888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86665440066425%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_159: {
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
  View_301_160: {
    width: wp("3.9999994102883454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400008491847828%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_160: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_161: {
    width: wp("8.533334040987318%"),
    height: hp("6.331259305359888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000011794233092%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_162: {
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
  View_301_163: {
    width: wp("3.733333642931952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400008491847828%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_163: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_164: {
    width: wp("8.533333119562858%"),
    height: hp("6.331259305359888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.86664260643116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_165: {
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
  View_301_166: {
    width: wp("5.866666231754322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333380510265709%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_166: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_167: {
    width: wp("8.533333119562858%"),
    height: hp("6.331259305359888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_168: {
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
  View_301_169: {
    width: wp("4.799999476630907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866673271437198%"),
    top: hp("1.3661202185792405%")
  },
  Text_301_169: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_301_170: {
    width: wp("16.000001326851223%"),
    height: hp("7.537216436667521%"),
    top: hp("44.77105479422814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599974996225844%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_301_171: {
    width: wp("58.39999655018681%"),
    height: hp("7.537216436667521%"),
    top: hp("44.77105479422814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.999995282306763%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_301_172: {
    width: wp("74.66667285863903%"),
    top: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352657%")
  },
  Text_301_172: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_173: {
    width: wp("6.666667219521343%"),
    top: hp("46.73071689293033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399991979921497%")
  },
  Text_301_173: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_174: {
    width: wp("39.73333754977166%"),
    top: hp("46.73071689293033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.26666289251207%")
  },
  Text_301_174: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_175: {
    width: wp("80.79999840777853%"),
    top: hp("27.133962495730874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599974996225844%")
  },
  Text_301_175: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_301_176: {
    width: wp("80.79999840777853%"),
    top: hp("70.69905598958334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599974996225844%")
  },
  Text_301_176: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_301_177: {
    width: wp("80.79999840777853%"),
    height: hp("7.537216436667521%"),
    top: hp("56.07686694202527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599974996225844%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I301_177_301_39: {
    flexGrow: 1,
    width: wp("80.79999840777853%"),
    height: hp("7.537216436667521%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I301_177_301_40: {
    flexGrow: 1,
    width: wp("73.26180278391078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.769083069142514%"),
    top: hp("2.322404371584696%")
  },
  Text_I301_177_301_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_301_178: {
    width: wp("3.3786574826133775e-7%"),
    height: hp("4.823816018026383%"),
    top: hp("46.127769595286885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.26666289251207%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
