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
      <View style={styles.View_301_498}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07dd/58d6/668d042e6126c4c9aac7facb8e79d162"
          }}
          style={styles.ImageBackground_301_499}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9fb/fc88/84b7992af065c67045211df87c9374ab"
          }}
          style={styles.ImageBackground_301_500}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9d7/acf7/0adf27cc83e9aca1c9faf9967119889d"
          }}
          style={styles.ImageBackground_301_501}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f10f/0cb9/f83ff394f25322c2e1f5b62cd440f96f"
          }}
          style={styles.ImageBackground_301_502}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dbf/420b/61cb86fd2f2d3b5ebc54b4bc5443807a"
          }}
          style={styles.ImageBackground_301_503}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ca/ef6f/6a35ca137e2299c05bc12ae232b80fc3"
          }}
          style={styles.ImageBackground_301_504}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ee/83f1/99a6516385fc214fc5697bfc79c615c9"
          }}
          style={styles.ImageBackground_301_505}
        />
        <View style={styles.View_301_506} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a24/86c8/7b8eb16ac2cf313fe6e3784e3910dcc6"
          }}
          style={styles.ImageBackground_301_507}
        />
      </View>
      <View style={styles.View_301_510} />
      <View style={styles.View_301_511}>
        <View style={styles.View_I301_511_301_10}>
          <View style={styles.View_I301_511_301_11} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24cb/6ae5/37bf546194989d63627a392d13125a38"
            }}
            style={styles.ImageBackground_I301_511_301_12}
          />
          <View style={styles.View_I301_511_301_13} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a88a/ded7/f41dec7843b5fcad7f7bdcd0d1fba7b9"
          }}
          style={styles.ImageBackground_I301_511_301_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7587/2345/81cfec30b2ed2737e555bd1c76f92635"
          }}
          style={styles.ImageBackground_I301_511_301_18}
        />
        <View style={styles.View_I301_511_301_23}>
          <View style={styles.View_I301_511_301_24}>
            <Text style={styles.Text_I301_511_301_24}>9:41</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("327_688"))
        }
      >
        <View style={styles.View_301_512}>
          <View style={styles.View_I301_512_301_39} />
          <View style={styles.View_I301_512_301_40}>
            <Text style={styles.Text_I301_512_301_40}>
              Grant Access to Location
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_301_513}>
        <Text style={styles.Text_301_513}>
          Your location helps our system to map down the closest drop of
          locations in your area
        </Text>
      </View>
      <View style={styles.View_301_514}>
        <Text style={styles.Text_301_514}>
          It is very important that you choose the Always Allow option in the
          next dialog. It makes the system work better. Thank you.
        </Text>
      </View>
      <View style={styles.View_301_515}>
        <Text style={styles.Text_301_515}>One more thing and we’re done</Text>
      </View>
      <View style={styles.View_301_516}>
        <Text style={styles.Text_301_516}>We need access to your location</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7350/92fb/06660a377a69089dca0bd4052bbbbb67"
        }}
        style={styles.ImageBackground_301_517}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/369b/25a6/d5be3b99d673c497af66a636ffd74b01"
        }}
        style={styles.ImageBackground_301_518}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_301_498: {
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
  ImageBackground_301_499: {
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
  ImageBackground_301_500: {
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
  ImageBackground_301_501: {
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
  ImageBackground_301_502: {
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
  ImageBackground_301_503: {
    width: wp("25.615098741319443%"),
    minWidth: wp("25.615098741319443%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.086170436103565%"),
    top: hp("21.038251366120228%")
  },
  ImageBackground_301_504: {
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
  ImageBackground_301_505: {
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
  View_301_506: {
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
  ImageBackground_301_507: {
    width: wp("10.246040049382454%"),
    minWidth: wp("10.246040049382454%"),
    height: hp("8.014572122709348%"),
    minHeight: hp("8.014572122709348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.77070300705767%"),
    top: hp("16.66666666666667%")
  },
  View_301_510: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    height: hp("34.15300546448087%"),
    minHeight: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("71.44808743169399%"),
    backgroundColor: "rgba(0, 179, 236, 1)"
  },
  View_301_511: {
    width: wp("100%"),
    height: hp("6.632749630453808%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_511_301_10: {
    flexGrow: 1,
    width: wp("6.487476883303141%"),
    height: hp("1.7084356214179368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68889171950482%"),
    top: hp("2.6129050332991803%")
  },
  View_I301_511_301_11: {
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
  ImageBackground_I301_511_301_12: {
    width: wp("0.35415133416364736%"),
    height: hp("0.602977262820051%"),
    top: hp("0.5527183657786883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133325549139499%")
  },
  View_I301_511_301_13: {
    width: wp("4.800002240904287%"),
    height: hp("1.1054586191646387%"),
    top: hp("0.30147364882172134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333352204106347%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I301_511_301_14: {
    flexGrow: 1,
    width: wp("4.088876328030646%"),
    height: hp("1.6581905344144894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666996905193%"),
    top: hp("2.6125048027663933%")
  },
  ImageBackground_I301_511_301_18: {
    flexGrow: 1,
    width: wp("4.533334630698974%"),
    height: hp("1.6079412783429923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.39998254453504%"),
    top: hp("2.6631339651639343%")
  },
  View_I301_511_301_23: {
    flexGrow: 1,
    width: wp("14.400001194166101%"),
    height: hp("3.165630434380203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600005071520229%"),
    top: hp("1.055207799692623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_511_301_24: {
    width: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.819672131147541%")
  },
  Text_I301_511_301_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_301_512: {
    width: wp("80.79999840777853%"),
    height: hp("7.537216436667521%"),
    top: hp("109.97267759562841%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_512_301_39: {
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
  View_I301_512_301_40: {
    flexGrow: 1,
    width: wp("73.26180278391078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.769097811933875%"),
    top: hp("2.3224043715847102%")
  },
  Text_I301_512_301_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_301_513: {
    width: wp("80.79999840777853%"),
    top: hp("27.88769664660178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600004481808574%")
  },
  Text_301_513: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_301_514: {
    width: wp("80.79999840777853%"),
    top: hp("86.20218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.83574879227053%")
  },
  Text_301_514: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.061499999463558205,
    textTransform: "none"
  },
  View_301_515: {
    width: wp("74.66667285863903%"),
    top: hp("11.908792797984972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600004481808574%")
  },
  Text_301_515: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "uppercase"
  },
  View_301_516: {
    width: wp("80.53333816896891%"),
    top: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%")
  },
  Text_301_516: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_301_517: {
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
  ImageBackground_301_518: {
    width: wp("2.898550724637681%"),
    minWidth: wp("2.898550724637681%"),
    height: hp("1.4298459871219156%"),
    minHeight: hp("1.4298459871219156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.217391304347828%"),
    top: hp("80.46448087431693%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
