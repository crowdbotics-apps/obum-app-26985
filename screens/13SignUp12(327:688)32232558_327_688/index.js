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
      <View style={styles.View_327_689}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07dd/58d6/668d042e6126c4c9aac7facb8e79d162"
          }}
          style={styles.ImageBackground_327_690}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9fb/fc88/84b7992af065c67045211df87c9374ab"
          }}
          style={styles.ImageBackground_327_691}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9d7/acf7/0adf27cc83e9aca1c9faf9967119889d"
          }}
          style={styles.ImageBackground_327_692}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f10f/0cb9/f83ff394f25322c2e1f5b62cd440f96f"
          }}
          style={styles.ImageBackground_327_693}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dbf/420b/61cb86fd2f2d3b5ebc54b4bc5443807a"
          }}
          style={styles.ImageBackground_327_694}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ca/ef6f/6a35ca137e2299c05bc12ae232b80fc3"
          }}
          style={styles.ImageBackground_327_695}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ee/83f1/99a6516385fc214fc5697bfc79c615c9"
          }}
          style={styles.ImageBackground_327_696}
        />
        <View style={styles.View_327_697} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a24/86c8/7b8eb16ac2cf313fe6e3784e3910dcc6"
          }}
          style={styles.ImageBackground_327_698}
        />
      </View>
      <View style={styles.View_327_701} />
      <View style={styles.View_327_702}>
        <View style={styles.View_I327_702_301_10}>
          <View style={styles.View_I327_702_301_11} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24cb/6ae5/37bf546194989d63627a392d13125a38"
            }}
            style={styles.ImageBackground_I327_702_301_12}
          />
          <View style={styles.View_I327_702_301_13} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47cf/9e7b/abdd5b8420ace13bd2c4a805dd5a696a"
          }}
          style={styles.ImageBackground_I327_702_301_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95dc/349a/a17a8dab249da7a28bb8858287ea5555"
          }}
          style={styles.ImageBackground_I327_702_301_18}
        />
        <View style={styles.View_I327_702_301_23}>
          <View style={styles.View_I327_702_301_24}>
            <Text style={styles.Text_I327_702_301_24}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_327_703}>
        <View style={styles.View_I327_703_301_39} />
        <View style={styles.View_I327_703_301_40}>
          <Text style={styles.Text_I327_703_301_40}>
            Grant Access to Location
          </Text>
        </View>
      </View>
      <View style={styles.View_327_704}>
        <Text style={styles.Text_327_704}>
          Your location helps our system to map down the closest drop of
          locations in your area
        </Text>
      </View>
      <View style={styles.View_327_705}>
        <Text style={styles.Text_327_705}>
          It is very important that you choose the Always Allow option in the
          next dialog. It makes the system work better. Thank you.
        </Text>
      </View>
      <View style={styles.View_327_706}>
        <Text style={styles.Text_327_706}>One more thing and we’re done</Text>
      </View>
      <View style={styles.View_327_707}>
        <Text style={styles.Text_327_707}>We need access to your location</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7350/92fb/06660a377a69089dca0bd4052bbbbb67"
        }}
        style={styles.ImageBackground_327_708}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/369b/25a6/d5be3b99d673c497af66a636ffd74b01"
        }}
        style={styles.ImageBackground_327_709}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/480c/14d8/a8f95de168270c4a73bb168ea7b05a21"
        }}
        style={styles.ImageBackground_301_540}
      />
      <View style={styles.View_301_541}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/631e/282f/e4f96e6a5bff29f4c221bf4c9e900f8d"
          }}
          style={styles.ImageBackground_301_542}
        />
        <View style={styles.View_301_544}>
          <View style={styles.View_301_545} />
          <View style={styles.View_301_546}>
            <Text style={styles.Text_301_546}>Don’t Allow</Text>
          </View>
        </View>
        <View style={styles.View_301_547}>
          <View style={styles.View_301_548} />
          <View style={styles.View_301_549}>
            <Text style={styles.Text_301_549}>
              Allow Only While Using the App
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("301_313"))
          }
        >
          <View style={styles.View_301_550}>
            <View style={styles.View_301_551} />
            <View style={styles.View_301_552}>
              <Text style={styles.Text_301_552}>Always Allow</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_301_553}>
          <Text style={styles.Text_301_553}>
            We need access to your location to know better the movements of the
            possible infection chains.
          </Text>
        </View>
        <View style={styles.View_301_554}>
          <Text style={styles.Text_301_554}>
            Allow “World Citizen” to access your location?
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("127.45901639344261%") },
  View_327_689: {
    width: wp("91.78743961352657%"),
    minWidth: wp("91.78743961352657%"),
    height: hp("34.15300546448087%"),
    minHeight: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("32.51366120218579%")
  },
  ImageBackground_327_690: {
    width: wp("91.78743961352657%"),
    minWidth: wp("91.78743961352657%"),
    height: hp("28.415300546448087%"),
    minHeight: hp("28.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.73770491803279%")
  },
  ImageBackground_327_691: {
    width: wp("85.81058668053669%"),
    minWidth: wp("85.81058668053669%"),
    height: hp("28.415300546448087%"),
    minHeight: hp("28.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9884227807971016%"),
    top: hp("5.73770491803279%")
  },
  ImageBackground_327_692: {
    width: wp("61.04932038680367%"),
    minWidth: wp("61.04932038680367%"),
    height: hp("15.846994535519126%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.369065141908214%"),
    top: hp("14.754098360655746%")
  },
  ImageBackground_327_693: {
    width: wp("57.20705410132661%"),
    minWidth: wp("57.20705410132661%"),
    height: hp("15.846994535519126%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.290198284646742%"),
    top: hp("14.754098360655746%")
  },
  ImageBackground_327_694: {
    width: wp("25.615098741319443%"),
    minWidth: wp("25.615098741319443%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.08618517889492%"),
    top: hp("21.038251366120228%")
  },
  ImageBackground_327_695: {
    width: wp("20.49208009876491%"),
    minWidth: wp("20.49208009876491%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.64768620735205%"),
    top: hp("21.72131147540984%")
  },
  ImageBackground_327_696: {
    width: wp("7.684529806680726%"),
    minWidth: wp("7.684529806680726%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.051453521286234%"),
    top: hp("23.770491803278688%")
  },
  View_327_697: {
    width: wp("80.04718725232111%"),
    minWidth: wp("80.04718725232111%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.76339942821558%"),
    top: hp("0%")
  },
  ImageBackground_327_698: {
    width: wp("10.246040049382454%"),
    minWidth: wp("10.246040049382454%"),
    height: hp("8.014572122709348%"),
    minHeight: hp("8.014572122709348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.770688264266305%"),
    top: hp("16.66666666666667%")
  },
  View_327_701: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    height: hp("34.15300546448087%"),
    minHeight: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("76.775956284153%"),
    backgroundColor: "rgba(0, 179, 236, 1)"
  },
  View_327_702: {
    width: wp("100%"),
    height: hp("6.906646978659708%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I327_702_301_10: {
    flexGrow: 1,
    width: wp("6.487476883303141%"),
    height: hp("1.7789848515244782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68889171950482%"),
    top: hp("2.7208005144296448%")
  },
  View_I327_702_301_11: {
    width: wp("5.866657938934178%"),
    height: hp("1.7789848515244782%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I327_702_301_12: {
    width: wp("0.35415133416364736%"),
    height: hp("0.6278770217478601%"),
    top: hp("0.5755648586919402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133325549139499%")
  },
  View_I327_702_301_13: {
    width: wp("4.800002240904287%"),
    height: hp("1.1511083509101243%"),
    top: hp("0.31394750042691255%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333352204106347%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I327_702_301_14: {
    flexGrow: 1,
    width: wp("4.088876328030646%"),
    height: hp("1.7266653925994708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666996905193%"),
    top: hp("2.720366931352459%")
  },
  ImageBackground_I327_702_301_18: {
    flexGrow: 1,
    width: wp("4.533334630698974%"),
    height: hp("1.6743404617726478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.39998254453504%"),
    top: hp("2.77313065659153%")
  },
  View_I327_702_301_23: {
    flexGrow: 1,
    width: wp("14.400001194166101%"),
    height: hp("3.296354429317954%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.599990328728865%"),
    top: hp("1.0987995752219946%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I327_702_301_24: {
    width: wp("14.400001194166101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054644%")
  },
  Text_I327_702_301_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_327_703: {
    width: wp("80.79999840777853%"),
    height: hp("7.848462380998121%"),
    top: hp("117.7857779414276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I327_703_301_39: {
    flexGrow: 1,
    width: wp("80.79999840777853%"),
    height: hp("7.848462380998121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(50, 201, 249, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I327_703_301_40: {
    flexGrow: 1,
    width: wp("73.26180278391078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7691125547252398%"),
    top: hp("2.45901639344261%")
  },
  Text_I327_703_301_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_327_704: {
    width: wp("80.79999840777853%"),
    top: hp("29.039293299607237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600004481808574%")
  },
  Text_327_704: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_327_705: {
    width: wp("80.79999840777853%"),
    top: hp("93.60271516393442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%")
  },
  Text_327_705: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.061499999463558205,
    textTransform: "none"
  },
  View_327_706: {
    width: wp("74.66667285863903%"),
    top: hp("12.400576065146858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600004481808574%")
  },
  Text_327_706: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "uppercase"
  },
  View_327_707: {
    width: wp("80.53333816896891%"),
    top: hp("14.936603483606559%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%")
  },
  Text_327_707: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_708: {
    width: wp("4.754262730695199%"),
    minWidth: wp("4.754262730695199%"),
    height: hp("2.7322578951309286%"),
    minHeight: hp("2.7322578951309286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("80.73770491803278%")
  },
  ImageBackground_327_709: {
    width: wp("2.898550724637681%"),
    minWidth: wp("2.898550724637681%"),
    height: hp("1.4298459871219156%"),
    minHeight: hp("1.4298459871219156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.217391304347828%"),
    top: hp("80.46448087431693%")
  },
  ImageBackground_301_540: {
    width: wp("100%"),
    height: hp("127.45901639344261%"),
    top: hp("-0.5690277599897541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_301_541: {
    width: wp("71.9999967565859%"),
    height: hp("43.323512676635076%"),
    top: hp("43.52953968152322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.458937198067632%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_301_542: {
    flexGrow: 1,
    width: wp("71.9999967565859%"),
    height: hp("43.323512676635076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_301_544: {
    flexGrow: 1,
    width: wp("71.98067632850241%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.29508196721312%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_545: {
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
  View_301_546: {
    flexGrow: 1,
    width: wp("28.019323671497588%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.73913043478261%"),
    top: hp("1.639344262295083%")
  },
  Text_301_546: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_301_547: {
    flexGrow: 1,
    width: wp("71.98067632850241%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.28415300546449%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_548: {
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
  View_301_549: {
    flexGrow: 1,
    width: wp("64.97584541062803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772973%"),
    top: hp("1.6393442622950687%")
  },
  Text_301_549: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_301_550: {
    flexGrow: 1,
    width: wp("71.98067632850241%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.273224043715857%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_301_551: {
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
  View_301_552: {
    flexGrow: 1,
    width: wp("32.125603864734295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.048309178743963%"),
    top: hp("1.639344262295083%")
  },
  Text_301_552: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_301_553: {
    flexGrow: 1,
    width: wp("64.25120772946859%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169094%"),
    top: hp("9.972677595628426%")
  },
  Text_301_553: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_301_554: {
    flexGrow: 1,
    width: wp("64.25120772946859%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169094%"),
    top: hp("2.5956284153005527%")
  },
  Text_301_554: {
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
