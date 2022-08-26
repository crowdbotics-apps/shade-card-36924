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
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_7_1125} />
      <View style={styles.View_7_1126} />
      <View style={styles.View_7_1127} />
      <View style={styles.View_7_1128} />
      <View style={styles.View_7_1129} />
      <View style={styles.View_7_1130} />
      <View style={styles.View_7_1131} />
      <View style={styles.View_7_1132} />
      <View style={styles.View_7_1133} />
      <View style={styles.View_7_1134} />
      <View style={styles.View_7_1135} />
      <View style={styles.View_7_1136} />
      <View style={styles.View_7_1137} />
      <View style={styles.View_7_1138} />
      <View style={styles.View_7_1139} />
      <View style={styles.View_7_1140} />
      <View style={styles.View_7_1141} />
      <View style={styles.View_7_1142} />
      <View style={styles.View_7_1143}>
        <Text style={styles.Text_7_1143}>ShadeCard</Text>
      </View>
      <View style={styles.View_7_1144}>
        <Text style={styles.Text_7_1144}>Product of Daten and Wissen</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/664c209b-568e-44e3-ace2-5f113318be0b"
        }}
        style={styles.ImageBackground_7_1145}
      />
      <View style={styles.View_7_1146} />
      <View style={styles.View_7_1147} />
      <View style={styles.View_7_1148} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a87cbdc7-c63d-4b4f-b249-19f82157d212"
        }}
        style={styles.ImageBackground_7_1149}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29f6d997-9faf-4bb1-8d38-b160aba6b07e"
        }}
        style={styles.ImageBackground_7_1150}
      />
      <View style={styles.View_7_1151}>
        <Text style={styles.Text_7_1151}>Standard</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0911051-e963-40e7-8cc8-05f7003659b2"
        }}
        style={styles.ImageBackground_7_1152}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7f38cfe-20d1-49ee-afab-f85f81480a55"
        }}
        style={styles.ImageBackground_7_1153}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22c97c4a-a9b7-4ca9-a949-58d0f865f49b"
        }}
        style={styles.ImageBackground_7_1154}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04cc18bc-744c-49fe-b259-33b433710348"
        }}
        style={styles.ImageBackground_7_1155}
      />
      <View style={styles.View_7_1156}>
        <Text style={styles.Text_7_1156}>Dark</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ac94a97-1205-4d7f-bbdf-0d4d149c141b"
        }}
        style={styles.ImageBackground_7_1157}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23d5bfcc-0fe1-4045-b62f-451d54a2e832"
        }}
        style={styles.ImageBackground_7_1158}
      />
      <View style={styles.View_7_1159}>
        <Text style={styles.Text_7_1159}>Front</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51ad2310-62b9-4bdc-b264-f00b8ab0e78d"
        }}
        style={styles.ImageBackground_7_1160}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a72ed3cf-76e2-469f-aad7-d1831a9ae2fa"
        }}
        style={styles.ImageBackground_7_1161}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efbd8dac-ce71-489f-ad99-0082c6c280fa"
        }}
        style={styles.ImageBackground_7_1162}
      />
      <View style={styles.View_7_1163}>
        <Text style={styles.Text_7_1163}>Back</Text>
      </View>
      <View style={styles.View_7_1164} />
      <View style={styles.View_7_1165}>
        <Text style={styles.Text_7_1165}>Choose PDF File</Text>
      </View>
      <View style={styles.View_7_1166}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abb07663-784c-4e0f-80d8-505d06a50837"
          }}
          style={styles.ImageBackground_7_1167}
        />
        <View style={styles.View_7_1168} />
      </View>
      <View style={styles.View_7_1169} />
      <View style={styles.View_7_1170}>
        <View style={styles.View_7_1171}>
          <Text style={styles.Text_7_1171}>Choose PDF File</Text>
        </View>
        <View style={styles.View_7_1172}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dfe8fef2-f48c-4060-8fbb-f9fc8edaaa54"
            }}
            style={styles.ImageBackground_7_1173}
          />
          <View style={styles.View_7_1174} />
        </View>
      </View>
      <View style={styles.View_7_1175} />
      <View style={styles.View_7_1176}>
        <View style={styles.View_7_1177}>
          <Text style={styles.Text_7_1177}>Choose PDF File</Text>
        </View>
        <View style={styles.View_7_1178}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f26cf5f-6981-4e19-b36d-23ffb594eb9a"
            }}
            style={styles.ImageBackground_7_1179}
          />
          <View style={styles.View_7_1180} />
        </View>
      </View>
      <View style={styles.View_7_1181} />
      <View style={styles.View_7_1182}>
        <View style={styles.View_7_1183}>
          <Text style={styles.Text_7_1183}>Select Path</Text>
        </View>
      </View>
      <View style={styles.View_7_1184}>
        <Text style={styles.Text_7_1184}>Light</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5896e170-f296-4caa-a886-15bcb490d26b"
        }}
        style={styles.ImageBackground_7_1185}
      />
      <View style={styles.View_7_1186} />
      <View style={styles.View_7_1187} />
      <View style={styles.View_7_1188} />
      <View style={styles.View_7_1189} />
      <View style={styles.View_7_1190} />
      <View style={styles.View_7_1191} />
      <View style={styles.View_7_1192} />
      <View style={styles.View_23_10}>
        <TouchableOpacity
          style={styles.TouchableOpacity_23_11}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("7_1715"))
          }
        />
        <View style={styles.View_23_12}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92db027f-fe34-4268-b5c8-572e15ee9c06"
            }}
            style={styles.ImageBackground_23_13}
          />
          <View style={styles.View_23_14} />
        </View>
      </View>
      <View style={styles.View_7_1193} />
      <View style={styles.View_7_1194} />
      <View style={styles.View_7_1195} />
      <View style={styles.View_7_1196} />
      <View style={styles.View_7_1197} />
      <View style={styles.View_7_1198} />
      <View style={styles.View_7_1199} />
      <View style={styles.View_7_1200} />
      <View style={styles.View_7_1201} />
      <View style={styles.View_7_1202} />
      <View style={styles.View_7_1203} />
      <View style={styles.View_7_1204} />
      <View style={styles.View_7_1205} />
      <View style={styles.View_7_1206} />
      <View style={styles.View_7_1207} />
      <View style={styles.View_7_1208} />
      <View style={styles.View_7_1209} />
      <View style={styles.View_7_1210} />
      <View style={styles.View_7_1211} />
      <View style={styles.View_7_1212} />
      <View style={styles.View_7_1213} />
      <View style={styles.View_7_1214} />
      <View style={styles.View_7_1215} />
      <View style={styles.View_7_1216} />
      <View style={styles.View_7_1217} />
      <View style={styles.View_7_1218} />
      <View style={styles.View_7_1219} />
      <View style={styles.View_7_1220} />
      <View style={styles.View_7_1221} />
      <View style={styles.View_7_1222} />
      <View style={styles.View_7_1223} />
      <View style={styles.View_7_1224}>
        <Text style={styles.Text_7_1224}>Lab Value - L</Text>
      </View>
      <View style={styles.View_7_1225}>
        <Text style={styles.Text_7_1225}>NA</Text>
      </View>
      <View style={styles.View_7_1226}>
        <Text style={styles.Text_7_1226}>NA</Text>
      </View>
      <View style={styles.View_7_1227}>
        <Text style={styles.Text_7_1227}>NA</Text>
      </View>
      <View style={styles.View_7_1228}>
        <Text style={styles.Text_7_1228}>NA</Text>
      </View>
      <View style={styles.View_7_1229}>
        <Text style={styles.Text_7_1229}>NA</Text>
      </View>
      <View style={styles.View_7_1230}>
        <Text style={styles.Text_7_1230}>NA</Text>
      </View>
      <View style={styles.View_7_1231}>
        <Text style={styles.Text_7_1231}>NA</Text>
      </View>
      <View style={styles.View_7_1232}>
        <Text style={styles.Text_7_1232}>NA</Text>
      </View>
      <View style={styles.View_7_1233}>
        <Text style={styles.Text_7_1233}>NA</Text>
      </View>
      <View style={styles.View_7_1234}>
        <Text style={styles.Text_7_1234}>NA</Text>
      </View>
      <View style={styles.View_7_1235}>
        <Text style={styles.Text_7_1235}>NA</Text>
      </View>
      <View style={styles.View_7_1236}>
        <Text style={styles.Text_7_1236}>NA</Text>
      </View>
      <View style={styles.View_7_1237}>
        <Text style={styles.Text_7_1237}>NA</Text>
      </View>
      <View style={styles.View_7_1238}>
        <Text style={styles.Text_7_1238}>NA</Text>
      </View>
      <View style={styles.View_7_1239}>
        <Text style={styles.Text_7_1239}>NA</Text>
      </View>
      <View style={styles.View_7_1240}>
        <Text style={styles.Text_7_1240}>NA</Text>
      </View>
      <View style={styles.View_7_1241}>
        <Text style={styles.Text_7_1241}>NA</Text>
      </View>
      <View style={styles.View_7_1242}>
        <Text style={styles.Text_7_1242}>NA</Text>
      </View>
      <View style={styles.View_7_1243}>
        <Text style={styles.Text_7_1243}>NA</Text>
      </View>
      <View style={styles.View_7_1244}>
        <Text style={styles.Text_7_1244}>NA</Text>
      </View>
      <View style={styles.View_7_1245}>
        <Text style={styles.Text_7_1245}>NA</Text>
      </View>
      <View style={styles.View_7_1246}>
        <Text style={styles.Text_7_1246}>NA</Text>
      </View>
      <View style={styles.View_7_1247}>
        <Text style={styles.Text_7_1247}>NA</Text>
      </View>
      <View style={styles.View_7_1248}>
        <Text style={styles.Text_7_1248}>NA</Text>
      </View>
      <View style={styles.View_7_1249}>
        <Text style={styles.Text_7_1249}>NA</Text>
      </View>
      <View style={styles.View_7_1250}>
        <Text style={styles.Text_7_1250}>NA</Text>
      </View>
      <View style={styles.View_7_1251}>
        <Text style={styles.Text_7_1251}>NA</Text>
      </View>
      <View style={styles.View_7_1252}>
        <Text style={styles.Text_7_1252}>NA</Text>
      </View>
      <View style={styles.View_23_38}>
        <View style={styles.View_23_39} />
        <View style={styles.View_23_40}>
          <Text style={styles.Text_23_40}>Save</Text>
        </View>
      </View>
      <View style={styles.View_7_1253}>
        <Text style={styles.Text_7_1253}>NA</Text>
      </View>
      <View style={styles.View_7_1254} />
      <View style={styles.View_7_1255} />
      <View style={styles.View_7_1256} />
      <View style={styles.View_7_1257} />
      <View style={styles.View_7_1258} />
      <View style={styles.View_7_1259} />
      <View style={styles.View_7_1260} />
      <View style={styles.View_7_1261} />
      <View style={styles.View_7_1262} />
      <View style={styles.View_7_1263}>
        <Text style={styles.Text_7_1263}>Pantone No.</Text>
      </View>
      <View style={styles.View_7_1264}>
        <Text style={styles.Text_7_1264}>NA</Text>
      </View>
      <View style={styles.View_7_1265}>
        <Text style={styles.Text_7_1265}>NA</Text>
      </View>
      <View style={styles.View_7_1266}>
        <Text style={styles.Text_7_1266}>NA</Text>
      </View>
      <View style={styles.View_7_1267}>
        <Text style={styles.Text_7_1267}>NA</Text>
      </View>
      <View style={styles.View_7_1268}>
        <Text style={styles.Text_7_1268}>NA</Text>
      </View>
      <View style={styles.View_7_1269}>
        <Text style={styles.Text_7_1269}>NA</Text>
      </View>
      <View style={styles.View_7_1270}>
        <Text style={styles.Text_7_1270}>NA</Text>
      </View>
      <View style={styles.View_7_1271}>
        <Text style={styles.Text_7_1271}>NA</Text>
      </View>
      <View style={styles.View_7_1272}>
        <Text style={styles.Text_7_1272}>NA</Text>
      </View>
      <View style={styles.View_7_1273}>
        <Text style={styles.Text_7_1273}>NA</Text>
      </View>
      <View style={styles.View_7_1274}>
        <Text style={styles.Text_7_1274}>NA</Text>
      </View>
      <View style={styles.View_7_1275}>
        <Text style={styles.Text_7_1275}>Lab Value - a</Text>
      </View>
      <View style={styles.View_7_1276}>
        <Text style={styles.Text_7_1276}>Lab Value - b</Text>
      </View>
      <View style={styles.View_7_1277}>
        <Text style={styles.Text_7_1277}>Delta E Value (rEab)</Text>
      </View>
      <View style={styles.View_7_1278}>
        <Text style={styles.Text_7_1278}>
          Spectrophotometer Standard Setting
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ed15311-6d53-4919-b90b-9adf07d97a48"
        }}
        style={styles.ImageBackground_7_1286}
      />
      <View style={styles.View_7_1287}>
        <Text style={styles.Text_7_1287}>Cipla Info</Text>
      </View>
      <View style={styles.View_7_1288} />
      <View style={styles.View_7_1289}>
        <Text style={styles.Text_7_1289}>Merged Files</Text>
      </View>
      <View style={styles.View_7_1290} />
      <View style={styles.View_7_1291}>
        <Text style={styles.Text_7_1291}>Leaflet</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/021b643b-fca6-439a-91b6-c2bf08bf0acd"
        }}
        style={styles.ImageBackground_7_1292}
      />
      <View style={styles.View_7_1293} />
      <View style={styles.View_7_1294} />
      <View style={styles.View_7_1295}>
        <Text style={styles.Text_7_1295}>
          Your File has been successfully Merged and Downloaded
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c642c5fc-d3bd-45ab-88da-775138cb4b11"
        }}
        style={styles.ImageBackground_28_61}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_7_1125: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("-4%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_7_1126: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("7%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_7_1127: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("13%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_7_1128: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("35%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_7_1129: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_7_1130: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("21%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_7_1131: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("7%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_7_1132: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("23%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_7_1133: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94%"),
    top: hp("7%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_7_1134: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("78%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_7_1135: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("68%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_7_1136: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("83%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_7_1137: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("67%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_7_1138: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("38%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_7_1139: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("67%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_7_1140: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("59%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_7_1141: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("32%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_7_1142: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("78%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_7_1143: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_7_1143: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1144: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_7_1144: {
    color: "rgba(136, 130, 132, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1145: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%")
  },
  View_7_1146: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("10%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  View_7_1147: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("49%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  View_7_1148: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("49%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  ImageBackground_7_1149: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("54%")
  },
  ImageBackground_7_1150: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("54%")
  },
  View_7_1151: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_7_1151: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1152: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("54%")
  },
  ImageBackground_7_1153: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("13%")
  },
  ImageBackground_7_1154: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("54%")
  },
  ImageBackground_7_1155: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("54%")
  },
  View_7_1156: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_7_1156: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1157: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("54%")
  },
  ImageBackground_7_1158: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("54%")
  },
  View_7_1159: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_7_1159: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1160: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("54%")
  },
  ImageBackground_7_1161: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("54%")
  },
  ImageBackground_7_1162: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("54%")
  },
  View_7_1163: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_7_1163: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1164: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("85%"),
    backgroundColor: "rgba(29, 78, 137, 1)",
    opacity: 0.6000000238418579
  },
  View_7_1165: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_7_1165: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1166: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("86%")
  },
  ImageBackground_7_1167: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_1168: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 250, 255, 1)",
    opacity: 0.6000000238418579
  },
  View_7_1169: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("85%"),
    backgroundColor: "rgba(29, 78, 137, 1)",
    opacity: 0.6000000238418579
  },
  View_7_1170: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("86%")
  },
  View_7_1171: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_7_1171: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1172: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  ImageBackground_7_1173: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_1174: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 250, 255, 1)",
    opacity: 0.6000000238418579
  },
  View_7_1175: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("42%"),
    backgroundColor: "rgba(29, 78, 137, 1)",
    opacity: 0.6000000238418579
  },
  View_7_1176: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("43%")
  },
  View_7_1177: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_7_1177: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1178: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  ImageBackground_7_1179: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_1180: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 250, 255, 1)",
    opacity: 0.6000000238418579
  },
  View_7_1181: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("42%"),
    backgroundColor: "rgba(29, 78, 137, 1)",
    opacity: 0.6000000238418579
  },
  View_7_1182: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("43%")
  },
  View_7_1183: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_7_1183: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1184: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_7_1184: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1185: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("43%")
  },
  View_7_1186: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 1
  },
  View_7_1187: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("13%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  View_7_1188: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1189: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1190: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("28%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1191: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1192: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_23_10: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("10%")
  },
  TouchableOpacity_23_11: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 78, 137, 1)",
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 0.5
  },
  View_23_12: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_23_13: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_23_14: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_7_1193: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1194: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("28%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1195: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1196: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1197: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1198: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("28%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1199: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1200: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1201: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1202: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("28%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1203: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1204: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1205: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1206: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("28%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1207: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1208: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1209: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1210: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("28%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1211: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1212: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1213: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1214: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("28%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1215: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1216: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1217: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1218: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("28%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1219: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1220: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1221: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1222: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("28%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1223: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1224: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_7_1224: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1225: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_7_1225: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1226: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_7_1226: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1227: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_7_1227: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1228: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_7_1228: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1229: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_7_1229: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1230: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_7_1230: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1231: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_7_1231: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1232: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_7_1232: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1233: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_7_1233: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1234: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_7_1234: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1235: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_7_1235: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1236: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_7_1236: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1237: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_7_1237: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1238: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_7_1238: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1239: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_7_1239: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1240: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_7_1240: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1241: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_7_1241: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1242: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_7_1242: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1243: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_7_1243: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1244: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_7_1244: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1245: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_7_1245: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1246: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_7_1246: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1247: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_7_1247: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1248: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_7_1248: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1249: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_7_1249: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1250: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_7_1250: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1251: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_7_1251: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1252: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_7_1252: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_38: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("36%")
  },
  View_23_39: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 0.5
  },
  View_23_40: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_23_40: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1253: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_7_1253: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1254: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1255: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1256: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1257: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1258: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1259: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1260: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1261: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1262: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_7_1263: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_7_1263: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1264: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_7_1264: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1265: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_7_1265: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1266: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_7_1266: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1267: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_7_1267: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1268: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_7_1268: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1269: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_7_1269: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1270: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_7_1270: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1271: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_7_1271: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1272: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_7_1272: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1273: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_7_1273: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1274: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_7_1274: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1275: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_7_1275: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1276: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_7_1276: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1277: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_7_1277: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1278: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_7_1278: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1286: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("13%")
  },
  View_7_1287: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_7_1287: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1288: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("91%"),
    backgroundColor: "rgba(29, 78, 137, 1)",
    opacity: 0,
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 1
  },
  View_7_1289: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_7_1289: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1290: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("91%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 1
  },
  View_7_1291: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_7_1291: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1292: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("93%")
  },
  View_7_1293: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.3799999952316284
  },
  View_7_1294: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_7_1295: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("41%"),
    justifyContent: "flex-start"
  },
  Text_7_1295: {
    color: "rgba(2, 50, 108, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_61: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("43%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
