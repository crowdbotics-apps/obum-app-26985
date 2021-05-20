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
      <View style={styles.View_328_4}>
        <View style={styles.View_328_5}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b21b/ea03/2f612b542648c019f60ee74c9ede2032"
            }}
            style={styles.ImageBackground_328_6}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f561/eb3a/a4d8d674961dea755da030d4a0e35da2"
            }}
            style={styles.ImageBackground_328_8}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9ef/8e4c/b9aaa225feedcdcbaf66a3d493f2e5cd"
            }}
            style={styles.ImageBackground_328_9}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8ac/34b4/bfb6581d1b1d423ad23299113fdd0f2a"
            }}
            style={styles.ImageBackground_328_10}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a21/9347/950045e184eabb161d290e8abf98cac7"
            }}
            style={styles.ImageBackground_328_11}
          />
        </View>
        <View style={styles.View_328_12}>
          <Text style={styles.Text_328_12}>Platinum</Text>
        </View>
        <View style={styles.View_328_13}>
          <Text style={styles.Text_328_13}>• • • •</Text>
        </View>
        <View style={styles.View_328_14}>
          <Text style={styles.Text_328_14}>0212</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f33d/3a0e/f691c4edf58824f6fa3e3f6bf4107536"
          }}
          style={styles.ImageBackground_328_21}
        />
      </View>
      <View style={styles.View_328_25}>
        <View style={styles.View_328_26}>
          <Text style={styles.Text_328_26}>Name on card</Text>
        </View>
        <View style={styles.View_328_27}>
          <Text style={styles.Text_328_27}>Card Number</Text>
        </View>
        <View style={styles.View_328_28}>
          <Text style={styles.Text_328_28}>Expiration Date</Text>
        </View>
        <View style={styles.View_328_29}>
          <Text style={styles.Text_328_29}>CVV</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de6b/0b2c/2a31a5598a0a941881fd88f06ba95e1b"
          }}
          style={styles.ImageBackground_328_30}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de6b/0b2c/2a31a5598a0a941881fd88f06ba95e1b"
          }}
          style={styles.ImageBackground_328_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c3b/24ed/eff03e24bdb5ea3be05fc28ea83e007f"
          }}
          style={styles.ImageBackground_328_32}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c3b/24ed/eff03e24bdb5ea3be05fc28ea83e007f"
          }}
          style={styles.ImageBackground_328_33}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("268_984"))
        }
      >
        <View style={styles.View_328_34}>
          <View style={styles.View_328_35}>
            <Text style={styles.Text_328_35}>Pay $100</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("247_181"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfa2/056b/e6496a95d313ead41e1555c64981dc3c"
          }}
          style={styles.ImageBackground_328_107}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_328_4: {
    width: wp("77.29468599033817%"),
    minWidth: wp("77.29468599033817%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("9.153005464480875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_328_5: {
    width: wp("77.29468599033817%"),
    minWidth: wp("77.29468599033817%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_328_6: {
    width: wp("77.29468599033817%"),
    height: hp("27.322404371584703%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_328_8: {
    width: wp("77.29468599033817%"),
    height: hp("27.322404371584703%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_328_9: {
    width: wp("79.95169082125604%"),
    height: hp("35.51912568306011%"),
    top: hp("-8.196721311475411%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.1062801932367154%")
  },
  ImageBackground_328_10: {
    width: wp("96.85990338164251%"),
    height: hp("35.51912568306011%"),
    top: hp("-8.196721311475411%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6908212560386477%")
  },
  ImageBackground_328_11: {
    width: wp("92.82379150390625%"),
    height: hp("43.10866809282147%"),
    top: hp("-13.166350484545767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-18.622179998867754%")
  },
  View_328_12: {
    width: wp("18.84057971014493%"),
    top: hp("7.650273224043714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275361%")
  },
  Text_328_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30399999618530277,
    textTransform: "none"
  },
  View_328_13: {
    width: wp("10.38647342995169%"),
    top: hp("20.491803278688522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275361%")
  },
  Text_328_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30399999618530277,
    textTransform: "none"
  },
  View_328_14: {
    width: wp("10.869565217391305%"),
    top: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.115942028985508%")
  },
  Text_328_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  ImageBackground_328_21: {
    width: wp("9.66183574879227%"),
    height: hp("3.278688524590164%"),
    top: hp("3.2786885245901622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275361%")
  },
  View_328_25: {
    width: wp("90.82125603864735%"),
    minWidth: wp("90.82125603864735%"),
    height: hp("47.540983606557376%"),
    minHeight: hp("47.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("50%")
  },
  View_328_26: {
    width: wp("37.43961352657005%"),
    minWidth: wp("37.43961352657005%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396139%"),
    top: hp("0%")
  },
  Text_328_26: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_328_27: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396139%"),
    top: hp("17.759562841530055%")
  },
  Text_328_27: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_328_28: {
    width: wp("35.26570048309179%"),
    minWidth: wp("35.26570048309179%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.15846994535519%")
  },
  Text_328_28: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_328_29: {
    width: wp("8.937198067632849%"),
    minWidth: wp("8.937198067632849%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.00483091787439%"),
    top: hp("37.15846994535519%")
  },
  Text_328_29: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_328_30: {
    width: wp("88.88888888888889%"),
    minWidth: wp("88.88888888888889%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396139%"),
    top: hp("11.748633879781423%")
  },
  ImageBackground_328_31: {
    width: wp("88.88888888888889%"),
    minWidth: wp("88.88888888888889%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396139%"),
    top: hp("29.508196721311478%")
  },
  ImageBackground_328_32: {
    width: wp("33.81642512077295%"),
    minWidth: wp("33.81642512077295%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47.40437158469946%")
  },
  ImageBackground_328_33: {
    width: wp("33.81642512077295%"),
    minWidth: wp("33.81642512077295%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.00483091787439%"),
    top: hp("47.40437158469946%")
  },
  View_328_34: {
    width: wp("66.18357487922705%"),
    minWidth: wp("66.18357487922705%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.391304347826086%"),
    top: hp("109.69945355191257%"),
    backgroundColor: "rgba(50, 201, 249, 1)",
    overflow: "hidden"
  },
  View_328_35: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.154589371980677%"),
    top: hp("1.3661202185792263%")
  },
  Text_328_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_328_107: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("1.912568306010929%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
