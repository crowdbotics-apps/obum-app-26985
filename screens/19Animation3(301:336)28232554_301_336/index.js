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
      <View style={styles.View_301_337}>
        <Text style={styles.Text_301_337}>Yes, all set! </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cad4/cafd/6b0f06f3cfdee67481cf669c3b49c632"
        }}
        style={styles.ImageBackground_301_338}
      />
      <View style={styles.View_301_340}>
        <View style={styles.View_I301_340_301_10}>
          <View style={styles.View_I301_340_301_11} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24cb/6ae5/37bf546194989d63627a392d13125a38"
            }}
            style={styles.ImageBackground_I301_340_301_12}
          />
          <View style={styles.View_I301_340_301_13} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f6c/d861/80b452ad5e545246a33f1f228cbd4685"
          }}
          style={styles.ImageBackground_I301_340_301_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa75/c1e0/8398052249d17b3e3e5e6473d7e85c4a"
          }}
          style={styles.ImageBackground_I301_340_301_18}
        />
        <View style={styles.View_I301_340_301_23}>
          <View style={styles.View_I301_340_301_24}>
            <Text style={styles.Text_I301_340_301_24}>9:41</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2466/4b2a/c6f5d7025e7c9721f6da32e481d43c86"
        }}
        style={styles.ImageBackground_301_339}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_301_337: {
    width: wp("74.66667285863903%"),
    top: hp("15.978887172344605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600004481808574%")
  },
  Text_301_337: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_301_338: {
    width: wp("189.3333545629529%"),
    height: hp("107.0284483862705%"),
    top: hp("-1.3566981247865437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-44.80004057216183%")
  },
  View_301_340: {
    width: wp("110.39999994102882%"),
    height: hp("7.318896413500843%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_340_301_10: {
    flexGrow: 1,
    width: wp("7.162173358714523%"),
    height: hp("1.8851704936209923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("99.01653787364131%"),
    top: hp("2.883210729380123%")
  },
  View_I301_340_301_11: {
    width: wp("6.476788359563708%"),
    height: hp("1.8851704936209923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I301_340_301_12: {
    width: wp("0.3909788269927536%"),
    height: hp("0.6653543378486008%"),
    top: hp("0.6099013031506142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.771187160326065%")
  },
  View_I301_340_301_13: {
    width: wp("5.299200527909873%"),
    height: hp("1.2198164163391447%"),
    top: hp("0.3326749541068992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5888270871074752%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I301_340_301_14: {
    flexGrow: 1,
    width: wp("4.5141178628672725%"),
    height: hp("1.829728142159884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.03043383907004%"),
    top: hp("2.8827604700307377%")
  },
  ImageBackground_I301_340_301_18: {
    flexGrow: 1,
    width: wp("5.004801727147494%"),
    height: hp("1.7742797976634541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.55363073671496%"),
    top: hp("2.9386426581711067%")
  },
  View_I301_340_301_23: {
    flexGrow: 1,
    width: wp("15.8975997408807%"),
    height: hp("3.4931099479967127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.1823895588013285%"),
    top: hp("1.164370677510246%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_340_301_24: {
    width: wp("15.8975997408807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633879%")
  },
  Text_I301_340_301_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_301_339: {
    width: wp("74.93333309744867%"),
    height: hp("94.21519295113985%"),
    top: hp("-39.042771969988046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5333187084843%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
