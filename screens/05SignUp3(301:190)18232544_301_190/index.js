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
      <View style={styles.View_301_191} />
      <View style={styles.View_301_192} />
      <View style={styles.View_301_193}>
        <Text style={styles.Text_301_193}>
          Let’s start from your phone number
        </Text>
      </View>
      <View style={styles.View_301_194}>
        <Text style={styles.Text_301_194}>+1</Text>
      </View>
      <View style={styles.View_301_195}>
        <Text style={styles.Text_301_195}>22 345 6789</Text>
      </View>
      <View style={styles.View_301_196}>
        <Text style={styles.Text_301_196}>
          Your number will be used only in urgent situations and won’t be
          forwarded to third parties.{" "}
        </Text>
      </View>
      <View style={styles.View_301_197}>
        <Text style={styles.Text_301_197}>
          By continuing you are indicating that you agree to the Terms and
          Privacy Policy.
        </Text>
      </View>
      <View style={styles.View_301_198}>
        <View style={styles.View_I301_198_301_39} />
        <View style={styles.View_I301_198_301_40}>
          <Text style={styles.Text_I301_198_301_40}>
            Set up your protection
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7971/053b/c27508d8b60dbf714f3f8aee9a4bcb7b"
        }}
        style={styles.ImageBackground_301_199}
      />
      <View style={styles.View_301_200}>
        <View style={styles.View_I301_200_301_10}>
          <View style={styles.View_I301_200_301_11} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24cb/6ae5/37bf546194989d63627a392d13125a38"
            }}
            style={styles.ImageBackground_I301_200_301_12}
          />
          <View style={styles.View_I301_200_301_13} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a88a/ded7/f41dec7843b5fcad7f7bdcd0d1fba7b9"
          }}
          style={styles.ImageBackground_I301_200_301_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7587/2345/81cfec30b2ed2737e555bd1c76f92635"
          }}
          style={styles.ImageBackground_I301_200_301_18}
        />
        <View style={styles.View_I301_200_301_23}>
          <View style={styles.View_I301_200_301_24}>
            <Text style={styles.Text_I301_200_301_24}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_301_201}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5e8/bf58/85442892e8d523226a3d230861562c11"
          }}
          style={styles.ImageBackground_301_202}
        />
        <View style={styles.View_301_204}>
          <View style={styles.View_301_205} />
          <View style={styles.View_301_206}>
            <Text style={styles.Text_301_206}>Edit</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("301_277"))
          }
        >
          <View style={styles.View_301_207}>
            <View style={styles.View_301_208} />
            <View style={styles.View_301_209}>
              <Text style={styles.Text_301_209}>Yes</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_301_210}>
          <Text style={styles.Text_301_210}>
            Number Confirmation +234 902 205 6960 Is your phone number above
            correct?
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_301_191: {
    width: wp("16.000001326851223%"),
    height: hp("7.537216436667521%"),
    top: hp("44.77105479422814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599974996225844%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_301_192: {
    width: wp("58.39999655018681%"),
    height: hp("7.537216436667521%"),
    top: hp("44.77105479422814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.999995282306763%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_301_193: {
    width: wp("74.66667285863903%"),
    top: hp("15.978903848616804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599974996225844%")
  },
  Text_301_193: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_194: {
    width: wp("6.666667219521343%"),
    top: hp("46.73071689293033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399991979921497%")
  },
  Text_301_194: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_195: {
    width: wp("36.26666598849827%"),
    top: hp("46.73071689293033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.999995282306763%")
  },
  Text_301_195: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_196: {
    width: wp("80.79999840777853%"),
    top: hp("27.133962495730874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599974996225844%")
  },
  Text_301_196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_301_197: {
    width: wp("80.79999840777853%"),
    top: hp("70.54833584144468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599974996225844%")
  },
  Text_301_197: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_301_198: {
    width: wp("80.79999840777853%"),
    height: hp("7.537216436667521%"),
    top: hp("56.07686694202527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599974996225844%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_198_301_39: {
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
  View_I301_198_301_40: {
    flexGrow: 1,
    width: wp("73.26180278391078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.769083069142514%"),
    top: hp("2.322404371584696%")
  },
  Text_I301_198_301_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_301_199: {
    width: wp("100%"),
    height: hp("122.40437158469946%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_200: {
    width: wp("100%"),
    height: hp("6.632749630453808%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_200_301_10: {
    flexGrow: 1,
    width: wp("6.487476883303141%"),
    height: hp("1.7084356214179368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68889171950482%"),
    top: hp("2.6129050332991803%")
  },
  View_I301_200_301_11: {
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
  ImageBackground_I301_200_301_12: {
    width: wp("0.35415133416364736%"),
    height: hp("0.602977262820051%"),
    top: hp("0.5527183657786883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.1333550347222285%")
  },
  View_I301_200_301_13: {
    width: wp("4.800002240904287%"),
    height: hp("1.1054586191646387%"),
    top: hp("0.30147364882172134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333352204106347%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I301_200_301_14: {
    flexGrow: 1,
    width: wp("4.088876328030646%"),
    height: hp("1.6581905344144894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666996905193%"),
    top: hp("2.6125048027663933%")
  },
  ImageBackground_I301_200_301_18: {
    flexGrow: 1,
    width: wp("4.533334630698974%"),
    height: hp("1.6079412783429923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.39998254453504%"),
    top: hp("2.6631339651639343%")
  },
  View_I301_200_301_23: {
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
  View_I301_200_301_24: {
    width: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.819672131147541%")
  },
  Text_I301_200_301_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_301_201: {
    width: wp("71.9999967565859%"),
    height: hp("34.671195608670594%"),
    top: hp("43.86660049521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133324369716183%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_301_202: {
    width: wp("71.9999967565859%"),
    height: hp("39.19352547067111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_204: {
    flexGrow: 1,
    width: wp("71.98067632850241%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.786885245901644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_205: {
    flexGrow: 1,
    width: wp("71.98067632850241%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.28999999165534973
  },
  View_301_206: {
    flexGrow: 1,
    width: wp("14.009661835748794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.985507246376812%"),
    top: hp("1.639344262295083%")
  },
  Text_301_206: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_301_207: {
    flexGrow: 1,
    width: wp("71.98067632850241%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.775956284152997%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_208: {
    flexGrow: 1,
    width: wp("71.98067632850241%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.28999999165534973
  },
  View_301_209: {
    flexGrow: 1,
    width: wp("13.768115942028986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.985507246376812%"),
    top: hp("1.639344262295083%")
  },
  Text_301_209: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_301_210: {
    flexGrow: 1,
    width: wp("64.25120772946859%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169094%"),
    top: hp("2.5956284153005527%")
  },
  Text_301_210: {
    color: "rgba(0, 0, 0, 1)",
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
