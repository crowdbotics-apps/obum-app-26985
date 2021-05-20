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
      <View style={styles.View_311_580} />
      <View style={styles.View_311_581}>
        <Text style={styles.Text_311_581}>Feedback received</Text>
      </View>
      <View style={styles.View_311_806}>
        <Text style={styles.Text_311_806}>
          By making your voice heard, you help us improve
        </Text>
      </View>
      <View style={styles.View_311_807} />
      <View style={styles.View_311_808}>
        <Text style={styles.Text_311_808}>Close</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40f2/fd41/aa020e07a009aefa870434b77096b3ec"
        }}
        style={styles.ImageBackground_223_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2eca/7b01/8cdc031e628b663fdaa1af188c6ca7e4"
        }}
        style={styles.ImageBackground_223_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd56/029d/7b801fc58ccb02476ee5f08d76672566"
        }}
        style={styles.ImageBackground_223_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d25d/66eb/5090ac3a9d0af5e13c7c0b5a024d1628"
        }}
        style={styles.ImageBackground_223_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b2a/66e5/6abb3aad9e379830db66b6f22757ff40"
        }}
        style={styles.ImageBackground_223_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e8d/962a/eb8c505581de23d3d2da89e247101c43"
        }}
        style={styles.ImageBackground_223_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5080/2d4e/e3862b111d3f2fd05f5b835d8ffad982"
        }}
        style={styles.ImageBackground_223_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faa8/5ffe/30769649d7e032afebee425418d99884"
        }}
        style={styles.ImageBackground_223_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7494/425b/ccf728d834495fb8b64de6bb01ab10da"
        }}
        style={styles.ImageBackground_223_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb05/1431/18565e749663a4580be8735c1316cb9b"
        }}
        style={styles.ImageBackground_223_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0366/2b3f/0eb2b0b96edec415793bc486ead23bd5"
        }}
        style={styles.ImageBackground_223_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3800/591f/2741f78dd3300798ce21439d11add51d"
        }}
        style={styles.ImageBackground_223_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4971/868a/d52da5e744013a53b549fc91330a86c6"
        }}
        style={styles.ImageBackground_223_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4971/868a/d52da5e744013a53b549fc91330a86c6"
        }}
        style={styles.ImageBackground_223_24}
      />
      <View style={styles.View_223_25}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31ae/ab25/0d0648dfc0fa712d330895a0e8946958"
          }}
          style={styles.ImageBackground_223_26}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcf4/699b/4e8f32d0f446214eb1753fc752d16742"
          }}
          style={styles.ImageBackground_223_27}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c168/4586/a4944746621b2f5e2cbf24aab4ae7248"
          }}
          style={styles.ImageBackground_223_28}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79f5/a64a/5e7919e1fa0818618cf3f445b187984f"
          }}
          style={styles.ImageBackground_223_29}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3af/25d2/76d1f64706a2e4a5ac3c3263c03d5138"
          }}
          style={styles.ImageBackground_223_30}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4002/3454/3d846ea65389670449db260ce5d97ab1"
          }}
          style={styles.ImageBackground_223_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ce/a2b2/82c826ad7ea9ac2cb38681f827bdcfa1"
          }}
          style={styles.ImageBackground_223_32}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ae9/13a6/9c228babc5de11182859c71f4b046919"
          }}
          style={styles.ImageBackground_223_33}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93dc/6236/f17660a9a7fb20a8b934e8c7a934cbf8"
          }}
          style={styles.ImageBackground_223_34}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aac9/7542/b326c39162f7ddf0d7f0d414b8b628a6"
          }}
          style={styles.ImageBackground_223_37}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ed5/4d04/7044deb93939010bfec1d34ddacc0121"
          }}
          style={styles.ImageBackground_223_38}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57da/6f10/0a751fb9f166e732ea9f6e73ef29071e"
          }}
          style={styles.ImageBackground_223_39}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3800/591f/2741f78dd3300798ce21439d11add51d"
          }}
          style={styles.ImageBackground_223_42}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_311_580: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_311_581: {
    width: wp("67.84565916398714%"),
    minWidth: wp("67.84565916398714%"),
    minHeight: hp("11.598746081504702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.720257234726688%"),
    top: hp("53.29153605015674%")
  },
  Text_311_581: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.180000305175781,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_311_806: {
    width: wp("73.63344051446946%"),
    minWidth: wp("73.63344051446946%"),
    minHeight: hp("17.86833855799373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.434083601286176%"),
    top: hp("64.89028213166145%")
  },
  Text_311_806: {
    color: "rgba(190, 187, 187, 1)",
    fontSize: 10.180000305175781,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_311_807: {
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
  View_311_808: {
    width: wp("9.32475884244373%"),
    minWidth: wp("9.32475884244373%"),
    minHeight: hp("7.210031347962382%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.01607717041801%"),
    top: hp("85.26645768025078%")
  },
  Text_311_808: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.180000305175781,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_223_8: {
    width: wp("53.7584409069785%"),
    height: hp("36.37907213551871%"),
    top: hp("13.800909825626958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.401929260450164%")
  },
  ImageBackground_223_9: {
    width: wp("3.923019948879622%"),
    height: hp("4.345872932840664%"),
    top: hp("23.503318475705328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.64753472920016%")
  },
  ImageBackground_223_10: {
    width: wp("3.4627362462868643%"),
    height: hp("3.634451026079423%"),
    top: hp("7.256486946512538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.200823326969456%")
  },
  ImageBackground_223_11: {
    width: wp("8.997021764037694%"),
    height: hp("9.297459999969387%"),
    top: hp("7.626371473354232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.206842845659164%")
  },
  ImageBackground_223_12: {
    width: wp("2.558771360342142%"),
    height: hp("3.535518825614714%"),
    top: hp("23.69893710815047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.86062788886656%")
  },
  ImageBackground_223_13: {
    width: wp("0.8160066757938104%"),
    height: hp("2.811156843896944%"),
    top: hp("24.521974186912228%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.85015260751607%")
  },
  ImageBackground_223_14: {
    width: wp("0.9214346048532959%"),
    height: hp("2.2639283565891946%"),
    top: hp("24.013641261755485%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.16163365403939%")
  },
  ImageBackground_223_15: {
    width: wp("29.0777470137912%"),
    height: hp("11.13625170668838%"),
    top: hp("26.27090884600313%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.441564823653536%")
  },
  ImageBackground_223_16: {
    width: wp("28.0323188021252%"),
    height: hp("10.80971601241061%"),
    top: hp("25.250263273902824%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.42158611334405%")
  },
  ImageBackground_223_17: {
    width: wp("3.4627362462868643%"),
    height: hp("3.2306982058342726%"),
    top: hp("7.256486946512538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.200823326969456%")
  },
  ImageBackground_223_18: {
    width: wp("9.72604720922145%"),
    height: hp("10.021350824720807%"),
    top: hp("7.210031347962382%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.90421837319132%")
  },
  ImageBackground_223_21: {
    width: wp("0.5972117089765248%"),
    height: hp("0.6495293404988735%"),
    top: hp("11.153706039380877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.07976843536475%")
  },
  ImageBackground_223_22: {
    width: wp("0.9384780834725431%"),
    height: hp("0.8351101770670062%"),
    top: hp("12.267109742358933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.165109714127812%")
  },
  ImageBackground_223_24: {
    width: wp("0.9384780834725431%"),
    height: hp("0.8351101770670062%"),
    top: hp("12.267109742358933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.165109714127812%")
  },
  View_223_25: {
    width: wp("52.730783542252816%"),
    height: hp("37.13421956125098%"),
    top: hp("7.210031347962382%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.093569445840032%")
  },
  ImageBackground_223_26: {
    width: wp("3.3005202314861335%"),
    height: hp("5.31252678658895%"),
    top: hp("16.68062120395768%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.089141158812296%")
  },
  ImageBackground_223_27: {
    width: wp("3.9230150425165795%"),
    height: hp("4.345875324500391%"),
    top: hp("16.293287127742946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.55397509608622%")
  },
  ImageBackground_223_28: {
    width: wp("52.730783542252816%"),
    height: hp("5.680373619342673%"),
    top: hp("25.424452635188086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_223_29: {
    width: wp("16.283411841683833%"),
    height: hp("4.1577856368779385%"),
    top: hp("32.97643392437304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07201927651163231%")
  },
  ImageBackground_223_30: {
    width: wp("11.744007956943328%"),
    height: hp("2.63047173479134%"),
    top: hp("33.98567606289185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.845946382479653%")
  },
  ImageBackground_223_31: {
    width: wp("29.60907669312701%"),
    height: hp("12.684392181683485%"),
    top: hp("17.72736456700627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.030023801748392%")
  },
  ImageBackground_223_32: {
    width: wp("5.301384143890675%"),
    height: hp("2.3234161089953957%"),
    top: hp("27.321555397727277%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.255475991791847%")
  },
  ImageBackground_223_33: {
    width: wp("9.385980440489348%"),
    height: hp("4.788078858187205%"),
    top: hp("22.23409335815047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.763519090854857%")
  },
  ImageBackground_223_34: {
    width: wp("4.086470527280948%"),
    height: hp("4.629468768367947%"),
    top: hp("22.527903972374606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.39007303415771%")
  },
  ImageBackground_223_37: {
    width: wp("2.8266784079205185%"),
    height: hp("3.253623460153801%"),
    top: hp("22.08470072492163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.271373393067982%")
  },
  ImageBackground_223_38: {
    width: wp("3.4627325665145827%"),
    height: hp("3.2306958141745445%"),
    top: hp("0.04645559855015602%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.107253881129424%")
  },
  ImageBackground_223_39: {
    width: wp("9.726047822516831%"),
    height: hp("10.021350824720807%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8106176492868862%")
  },
  ImageBackground_223_42: {
    width: wp("0.5972129355672855%"),
    height: hp("0.6495305363287373%"),
    top: hp("3.9435981583072097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.986189176798632%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
