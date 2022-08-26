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
      <View style={styles.View_7_604} />
      <View style={styles.View_7_605} />
      <View style={styles.View_7_606} />
      <View style={styles.View_7_607} />
      <View style={styles.View_7_608} />
      <View style={styles.View_7_609} />
      <View style={styles.View_7_610} />
      <View style={styles.View_7_611} />
      <View style={styles.View_7_612} />
      <View style={styles.View_7_613} />
      <View style={styles.View_7_614} />
      <View style={styles.View_7_615} />
      <View style={styles.View_7_616} />
      <View style={styles.View_7_617} />
      <View style={styles.View_7_618} />
      <View style={styles.View_7_619} />
      <View style={styles.View_7_620} />
      <View style={styles.View_7_621} />
      <View style={styles.View_7_622}>
        <Text style={styles.Text_7_622}>ShadeCard</Text>
      </View>
      <View style={styles.View_7_623}>
        <Text style={styles.Text_7_623}>Product of Daten and Wissen</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc066f0d-6dc6-4807-a724-d7990bf7ee99"
        }}
        style={styles.ImageBackground_7_624}
      />
      <View style={styles.View_7_625} />
      <View style={styles.View_7_626} />
      <View style={styles.View_7_627} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c668cee-223e-4180-aa88-25b5685b6f1a"
        }}
        style={styles.ImageBackground_7_628}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0c6b32c-483d-47ad-ac07-115c75159f69"
        }}
        style={styles.ImageBackground_7_629}
      />
      <View style={styles.View_7_630}>
        <Text style={styles.Text_7_630}>Standard</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64184e23-a86e-46b5-9bf4-46cd425b2de2"
        }}
        style={styles.ImageBackground_7_631}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/377b9ff5-9671-4a05-8f4d-0af93818e0c1"
        }}
        style={styles.ImageBackground_7_632}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d25ca33c-c01b-46b8-8cc4-eef6ac4b4506"
        }}
        style={styles.ImageBackground_7_633}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84a78a9c-bdf2-4675-8e7a-bd88c756a576"
        }}
        style={styles.ImageBackground_7_634}
      />
      <View style={styles.View_7_635}>
        <Text style={styles.Text_7_635}>Dark</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/883cc3d8-e0e4-4612-8c92-4e2dbad7b18c"
        }}
        style={styles.ImageBackground_7_636}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75d6f234-5b6d-4f14-8ee4-7469763c171f"
        }}
        style={styles.ImageBackground_7_637}
      />
      <View style={styles.View_7_638}>
        <Text style={styles.Text_7_638}>Front</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec2078ed-46b5-4b2b-8f0b-db7a52fee063"
        }}
        style={styles.ImageBackground_7_639}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae5e4f2a-d1ad-46ac-b402-27e67e322347"
        }}
        style={styles.ImageBackground_7_640}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c5efdb3-7868-48f3-b4b5-75c6d9f8f6cc"
        }}
        style={styles.ImageBackground_7_641}
      />
      <View style={styles.View_7_642}>
        <Text style={styles.Text_7_642}>Back</Text>
      </View>
      <View style={styles.View_7_643} />
      <View style={styles.View_7_644}>
        <Text style={styles.Text_7_644}>Choose PDF File</Text>
      </View>
      <View style={styles.View_7_645}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/769f610d-4165-4173-b9ef-850b5f86ea4c"
          }}
          style={styles.ImageBackground_7_646}
        />
        <View style={styles.View_7_647} />
      </View>
      <View style={styles.View_7_648} />
      <View style={styles.View_7_649}>
        <View style={styles.View_7_650}>
          <Text style={styles.Text_7_650}>Choose PDF File</Text>
        </View>
        <View style={styles.View_7_651}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc38c733-c47f-407a-b02a-d679c82350d6"
            }}
            style={styles.ImageBackground_7_652}
          />
          <View style={styles.View_7_653} />
        </View>
      </View>
      <View style={styles.View_7_654} />
      <View style={styles.View_7_655}>
        <View style={styles.View_7_656}>
          <Text style={styles.Text_7_656}>Choose PDF File</Text>
        </View>
        <View style={styles.View_7_657}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/155cf907-941b-4e2c-a5d2-52beff3bd4e6"
            }}
            style={styles.ImageBackground_7_658}
          />
          <View style={styles.View_7_659} />
        </View>
      </View>
      <View style={styles.View_7_660} />
      <View style={styles.View_7_661}>
        <View style={styles.View_7_662}>
          <Text style={styles.Text_7_662}>Select Path</Text>
        </View>
      </View>
      <View style={styles.View_7_663}>
        <Text style={styles.Text_7_663}>Light</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cee74607-51d7-40c5-acd9-28e48d4c4cb3"
        }}
        style={styles.ImageBackground_7_664}
      />
      <View style={styles.View_7_665} />
      <View style={styles.View_7_666} />
      <View style={styles.View_7_667} />
      <View style={styles.View_7_668} />
      <View style={styles.View_7_669} />
      <View style={styles.View_7_670} />
      <View style={styles.View_7_671} />
      <View style={styles.View_7_672} />
      <View style={styles.View_7_673} />
      <View style={styles.View_7_674} />
      <View style={styles.View_7_675} />
      <View style={styles.View_7_676} />
      <View style={styles.View_7_677} />
      <View style={styles.View_7_678} />
      <View style={styles.View_7_679} />
      <View style={styles.View_7_680} />
      <View style={styles.View_7_681} />
      <View style={styles.View_7_682} />
      <View style={styles.View_7_683} />
      <View style={styles.View_7_684} />
      <View style={styles.View_7_685} />
      <View style={styles.View_7_686} />
      <View style={styles.View_7_687} />
      <View style={styles.View_7_688} />
      <View style={styles.View_7_689} />
      <View style={styles.View_7_690} />
      <View style={styles.View_7_691} />
      <View style={styles.View_7_692} />
      <View style={styles.View_7_693} />
      <View style={styles.View_7_694} />
      <View style={styles.View_7_695} />
      <View style={styles.View_7_696} />
      <View style={styles.View_7_697} />
      <View style={styles.View_7_698} />
      <View style={styles.View_7_699} />
      <View style={styles.View_7_700} />
      <View style={styles.View_7_701} />
      <View style={styles.View_7_702} />
      <View style={styles.View_7_703}>
        <Text style={styles.Text_7_703}>Lab Value - L</Text>
      </View>
      <View style={styles.View_7_704}>
        <Text style={styles.Text_7_704}>NA</Text>
      </View>
      <View style={styles.View_7_705}>
        <Text style={styles.Text_7_705}>NA</Text>
      </View>
      <View style={styles.View_7_706}>
        <Text style={styles.Text_7_706}>NA</Text>
      </View>
      <View style={styles.View_7_707}>
        <Text style={styles.Text_7_707}>NA</Text>
      </View>
      <View style={styles.View_7_708}>
        <Text style={styles.Text_7_708}>NA</Text>
      </View>
      <View style={styles.View_7_709}>
        <Text style={styles.Text_7_709}>NA</Text>
      </View>
      <View style={styles.View_7_710}>
        <Text style={styles.Text_7_710}>NA</Text>
      </View>
      <View style={styles.View_7_711}>
        <Text style={styles.Text_7_711}>NA</Text>
      </View>
      <View style={styles.View_7_712}>
        <Text style={styles.Text_7_712}>NA</Text>
      </View>
      <View style={styles.View_7_713}>
        <Text style={styles.Text_7_713}>NA</Text>
      </View>
      <View style={styles.View_7_714}>
        <Text style={styles.Text_7_714}>NA</Text>
      </View>
      <View style={styles.View_7_715}>
        <Text style={styles.Text_7_715}>NA</Text>
      </View>
      <View style={styles.View_7_716}>
        <Text style={styles.Text_7_716}>NA</Text>
      </View>
      <View style={styles.View_7_717}>
        <Text style={styles.Text_7_717}>NA</Text>
      </View>
      <View style={styles.View_7_718}>
        <Text style={styles.Text_7_718}>NA</Text>
      </View>
      <View style={styles.View_7_719}>
        <Text style={styles.Text_7_719}>NA</Text>
      </View>
      <View style={styles.View_7_720}>
        <Text style={styles.Text_7_720}>NA</Text>
      </View>
      <View style={styles.View_7_721}>
        <Text style={styles.Text_7_721}>NA</Text>
      </View>
      <View style={styles.View_7_722}>
        <Text style={styles.Text_7_722}>NA</Text>
      </View>
      <View style={styles.View_7_723}>
        <Text style={styles.Text_7_723}>NA</Text>
      </View>
      <View style={styles.View_7_724}>
        <Text style={styles.Text_7_724}>NA</Text>
      </View>
      <View style={styles.View_7_725}>
        <Text style={styles.Text_7_725}>NA</Text>
      </View>
      <View style={styles.View_7_726}>
        <Text style={styles.Text_7_726}>NA</Text>
      </View>
      <View style={styles.View_7_727}>
        <Text style={styles.Text_7_727}>NA</Text>
      </View>
      <View style={styles.View_7_728}>
        <Text style={styles.Text_7_728}>NA</Text>
      </View>
      <View style={styles.View_7_729}>
        <Text style={styles.Text_7_729}>NA</Text>
      </View>
      <View style={styles.View_7_730}>
        <Text style={styles.Text_7_730}>NA</Text>
      </View>
      <View style={styles.View_7_731}>
        <Text style={styles.Text_7_731}>NA</Text>
      </View>
      <View style={styles.View_7_732}>
        <Text style={styles.Text_7_732}>NA</Text>
      </View>
      <View style={styles.View_7_733} />
      <View style={styles.View_7_734} />
      <View style={styles.View_7_735} />
      <View style={styles.View_7_736} />
      <View style={styles.View_7_737} />
      <View style={styles.View_7_738} />
      <View style={styles.View_7_739} />
      <View style={styles.View_7_740} />
      <View style={styles.View_7_741} />
      <View style={styles.View_7_742}>
        <Text style={styles.Text_7_742}>Pantone No.</Text>
      </View>
      <View style={styles.View_7_743}>
        <Text style={styles.Text_7_743}>NA</Text>
      </View>
      <View style={styles.View_7_744}>
        <Text style={styles.Text_7_744}>NA</Text>
      </View>
      <View style={styles.View_7_745}>
        <Text style={styles.Text_7_745}>NA</Text>
      </View>
      <View style={styles.View_7_746}>
        <Text style={styles.Text_7_746}>NA</Text>
      </View>
      <View style={styles.View_7_747}>
        <Text style={styles.Text_7_747}>NA</Text>
      </View>
      <View style={styles.View_7_748}>
        <Text style={styles.Text_7_748}>NA</Text>
      </View>
      <View style={styles.View_7_749}>
        <Text style={styles.Text_7_749}>NA</Text>
      </View>
      <View style={styles.View_7_750}>
        <Text style={styles.Text_7_750}>NA</Text>
      </View>
      <View style={styles.View_7_751}>
        <Text style={styles.Text_7_751}>NA</Text>
      </View>
      <View style={styles.View_7_752}>
        <Text style={styles.Text_7_752}>NA</Text>
      </View>
      <View style={styles.View_7_753}>
        <Text style={styles.Text_7_753}>NA</Text>
      </View>
      <View style={styles.View_7_754}>
        <Text style={styles.Text_7_754}>Lab Value - a</Text>
      </View>
      <View style={styles.View_7_755}>
        <Text style={styles.Text_7_755}>Lab Value - b</Text>
      </View>
      <View style={styles.View_7_756}>
        <Text style={styles.Text_7_756}>Delta E Value (rEab)</Text>
      </View>
      <View style={styles.View_7_757}>
        <Text style={styles.Text_7_757}>
          Spectrophotometer Standard Setting
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/103f4231-0627-4675-a4da-f92ea56374ea"
        }}
        style={styles.ImageBackground_7_765}
      />
      <View style={styles.View_7_766}>
        <Text style={styles.Text_7_766}>Cipla Info</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_7_767}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("7_947"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_7_768}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("7_947"))
        }
      >
        <Text style={styles.Text_7_768}>Merged Files</Text>
      </TouchableOpacity>
      <View style={styles.View_7_769} />
      <View style={styles.View_7_770}>
        <Text style={styles.Text_7_770}>Leaflet</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34503f14-1fac-4c45-8609-b6a4c4d3ea01"
        }}
        style={styles.ImageBackground_7_771}
      />
      <View style={styles.View_23_5}>
        <TouchableOpacity
          style={styles.TouchableOpacity_23_6}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("7_1715"))
          }
        />
        <View style={styles.View_23_7}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb4fb39e-15ca-4044-92df-d535b091d703"
            }}
            style={styles.ImageBackground_23_8}
          />
          <View style={styles.View_23_9} />
        </View>
      </View>
      <View style={styles.View_23_35}>
        <View style={styles.View_23_36} />
        <View style={styles.View_23_37}>
          <Text style={styles.Text_23_37}>Save</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71c86b4e-1796-407a-b211-d25aac0ba199"
        }}
        style={styles.ImageBackground_28_59}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_7_604: {
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
  View_7_605: {
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
  View_7_606: {
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
  View_7_607: {
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
  View_7_608: {
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
  View_7_609: {
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
  View_7_610: {
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
  View_7_611: {
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
  View_7_612: {
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
  View_7_613: {
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
  View_7_614: {
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
  View_7_615: {
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
  View_7_616: {
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
  View_7_617: {
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
  View_7_618: {
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
  View_7_619: {
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
  View_7_620: {
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
  View_7_621: {
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
  View_7_622: {
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
  Text_7_622: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_623: {
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
  Text_7_623: {
    color: "rgba(136, 130, 132, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_624: {
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
  View_7_625: {
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
  View_7_626: {
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
  View_7_627: {
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
  ImageBackground_7_628: {
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
  ImageBackground_7_629: {
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
  View_7_630: {
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
  Text_7_630: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_631: {
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
  ImageBackground_7_632: {
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
  ImageBackground_7_633: {
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
  ImageBackground_7_634: {
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
  View_7_635: {
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
  Text_7_635: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_636: {
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
  ImageBackground_7_637: {
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
  View_7_638: {
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
  Text_7_638: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_639: {
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
  ImageBackground_7_640: {
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
  ImageBackground_7_641: {
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
  View_7_642: {
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
  Text_7_642: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_643: {
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
  View_7_644: {
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
  Text_7_644: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_645: {
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
  ImageBackground_7_646: {
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
  View_7_647: {
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
    opacity: 0.5
  },
  View_7_648: {
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
  View_7_649: {
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
  View_7_650: {
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
  Text_7_650: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_651: {
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
  ImageBackground_7_652: {
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
  View_7_653: {
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
    opacity: 0.5
  },
  View_7_654: {
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
  View_7_655: {
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
  View_7_656: {
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
  Text_7_656: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_657: {
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
  ImageBackground_7_658: {
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
  View_7_659: {
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
    opacity: 0.5
  },
  View_7_660: {
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
  View_7_661: {
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
  View_7_662: {
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
  Text_7_662: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_663: {
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
  Text_7_663: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_664: {
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
  View_7_665: {
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
  View_7_666: {
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
  View_7_667: {
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
  View_7_668: {
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
  View_7_669: {
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
  View_7_670: {
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
  View_7_671: {
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
  View_7_672: {
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
  View_7_673: {
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
  View_7_674: {
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
  View_7_675: {
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
  View_7_676: {
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
  View_7_677: {
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
  View_7_678: {
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
  View_7_679: {
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
  View_7_680: {
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
  View_7_681: {
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
  View_7_682: {
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
  View_7_683: {
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
  View_7_684: {
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
  View_7_685: {
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
  View_7_686: {
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
  View_7_687: {
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
  View_7_688: {
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
  View_7_689: {
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
  View_7_690: {
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
  View_7_691: {
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
  View_7_692: {
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
  View_7_693: {
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
  View_7_694: {
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
  View_7_695: {
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
  View_7_696: {
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
  View_7_697: {
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
  View_7_698: {
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
  View_7_699: {
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
  View_7_700: {
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
  View_7_701: {
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
  View_7_702: {
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
  View_7_703: {
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
  Text_7_703: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_704: {
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
  Text_7_704: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_705: {
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
  Text_7_705: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_706: {
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
  Text_7_706: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_707: {
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
  Text_7_707: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_708: {
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
  Text_7_708: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_709: {
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
  Text_7_709: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_710: {
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
  Text_7_710: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_711: {
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
  Text_7_711: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_712: {
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
  Text_7_712: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_713: {
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
  Text_7_713: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_714: {
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
  Text_7_714: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_715: {
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
  Text_7_715: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_716: {
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
  Text_7_716: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_717: {
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
  Text_7_717: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_718: {
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
  Text_7_718: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_719: {
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
  Text_7_719: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_720: {
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
  Text_7_720: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_721: {
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
  Text_7_721: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_722: {
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
  Text_7_722: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_723: {
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
  Text_7_723: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_724: {
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
  Text_7_724: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_725: {
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
  Text_7_725: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_726: {
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
  Text_7_726: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_727: {
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
  Text_7_727: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_728: {
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
  Text_7_728: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_729: {
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
  Text_7_729: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_730: {
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
  Text_7_730: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_731: {
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
  Text_7_731: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_732: {
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
  Text_7_732: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_733: {
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
  View_7_734: {
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
  View_7_735: {
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
  View_7_736: {
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
  View_7_737: {
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
  View_7_738: {
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
  View_7_739: {
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
  View_7_740: {
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
  View_7_741: {
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
  View_7_742: {
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
  Text_7_742: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_743: {
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
  Text_7_743: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_744: {
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
  Text_7_744: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_745: {
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
  Text_7_745: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_746: {
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
  Text_7_746: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_747: {
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
  Text_7_747: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_748: {
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
  Text_7_748: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_749: {
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
  Text_7_749: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_750: {
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
  Text_7_750: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_751: {
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
  Text_7_751: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_752: {
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
  Text_7_752: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_753: {
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
  Text_7_753: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_754: {
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
  Text_7_754: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_755: {
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
  Text_7_755: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_756: {
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
  Text_7_756: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_757: {
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
  Text_7_757: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_765: {
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
  View_7_766: {
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
  Text_7_766: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_7_767: {
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
  TouchableOpacity_7_768: {
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
  Text_7_768: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_769: {
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
  View_7_770: {
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
  Text_7_770: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_771: {
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
  View_23_5: {
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
  TouchableOpacity_23_6: {
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
  View_23_7: {
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
  ImageBackground_23_8: {
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
  View_23_9: {
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
  View_23_35: {
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
  View_23_36: {
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
  View_23_37: {
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
  Text_23_37: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_59: {
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
