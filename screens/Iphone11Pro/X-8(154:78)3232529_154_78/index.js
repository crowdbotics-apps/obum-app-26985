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
      <View style={styles.View_154_79}>
        <View style={styles.View_154_80} />
        <View style={styles.View_181_0}>
          <Text style={styles.Text_181_0}>Lukman Busari</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02e1/ab57/279b3a55312a3e8f2388a5720a8ae35d"
          }}
          style={styles.ImageBackground_178_83}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f425/73cb/3f8035213e488c36e9d6602933647423"
          }}
          style={styles.ImageBackground_154_108}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e937/4e69/05295058261b70dd7158e320aadc3a3d"
        }}
        style={styles.ImageBackground_178_79}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a46/d37e/b534adb54ed84a86fb622039c64d7ec5"
        }}
        style={styles.ImageBackground_158_2}
      />
      <View style={styles.View_158_1}>
        <Text style={styles.Text_158_1}>Home</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8a2/176c/48428d5f6ce3d0d9922786538ca90221"
        }}
        style={styles.ImageBackground_158_13}
      />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("247_180"))
        }
      >
        <View style={styles.View_158_12}>
          <Text style={styles.Text_158_12}>Donations</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c74/6c76/d165f13c92e48f3cdaec6bab00784f17"
        }}
        style={styles.ImageBackground_158_18}
      />
      <View style={styles.View_158_17}>
        <Text style={styles.Text_158_17}>Pick up</Text>
      </View>
      <View style={styles.View_158_23}>
        <Text style={styles.Text_158_23}>Settings</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("154_114"))
        }
      >
        <View style={styles.View_158_28}>
          <Text style={styles.Text_158_28}>Talk to us</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62ba/de9f/f09c3a81dc89ffe3977b7b3f449ced4b"
        }}
        style={styles.ImageBackground_158_29}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_154_79: {
    width: wp("47.58454106280193%"),
    minWidth: wp("47.58454106280193%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_154_80: {
    width: wp("47.58454106280193%"),
    minWidth: wp("47.58454106280193%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_181_0: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    minHeight: hp("3.467118935506852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.396135265700483%"),
    top: hp("7.386471274120559%")
  },
  Text_181_0: {
    color: "rgba(125, 140, 152, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_178_83: {
    width: wp("14.251207729468598%"),
    minWidth: wp("14.251207729468598%"),
    height: hp("8.592425278627156%"),
    minHeight: hp("8.592425278627156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("5.577537661693135%")
  },
  ImageBackground_154_108: {
    width: wp("42.067493678291065%"),
    minWidth: wp("42.067493678291065%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3634274984903385%"),
    top: hp("16.38126060610912%")
  },
  ImageBackground_178_79: {
    width: wp("6.386473558951115%"),
    height: hp("3.278688524590164%"),
    top: hp("53.551912568306015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%")
  },
  ImageBackground_158_2: {
    width: wp("6.386315073943945%"),
    height: hp("3.278688524590164%"),
    top: hp("24.316939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%")
  },
  View_158_1: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357487922705314%"),
    top: hp("23.08743169398907%")
  },
  Text_158_1: {
    color: "rgba(125, 140, 152, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_158_13: {
    width: wp("6.386315073943945%"),
    height: hp("3.278688524590164%"),
    top: hp("34.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%")
  },
  View_158_12: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.425120772946862%"),
    top: hp("32.92349726775956%")
  },
  Text_158_12: {
    color: "rgba(125, 140, 152, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_158_18: {
    width: wp("6.386473558951115%"),
    height: hp("3.278688524590164%"),
    top: hp("43.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%")
  },
  View_158_17: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.14975845410628%"),
    top: hp("42.21311475409836%")
  },
  Text_158_17: {
    color: "rgba(125, 140, 152, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_23: {
    width: wp("17.632850241545896%"),
    minWidth: wp("17.632850241545896%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.391304347826086%"),
    top: hp("52.322404371584696%")
  },
  Text_158_23: {
    color: "rgba(125, 140, 152, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_28: {
    width: wp("21.980676328502415%"),
    minWidth: wp("21.980676328502415%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265698%"),
    top: hp("61.74863387978142%")
  },
  Text_158_28: {
    color: "rgba(125, 140, 152, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_158_29: {
    width: wp("5.570165201085777%"),
    height: hp("3.154796329352374%"),
    top: hp("63.387978142076506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
