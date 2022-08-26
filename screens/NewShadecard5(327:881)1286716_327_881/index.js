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
      <View style={styles.View_327_882} />
      <View style={styles.View_327_883} />
      <View style={styles.View_327_884} />
      <View style={styles.View_327_885} />
      <View style={styles.View_327_886} />
      <View style={styles.View_327_887} />
      <View style={styles.View_327_888} />
      <View style={styles.View_327_889} />
      <View style={styles.View_327_890} />
      <View style={styles.View_327_891} />
      <View style={styles.View_327_892} />
      <View style={styles.View_327_893} />
      <View style={styles.View_327_894} />
      <View style={styles.View_327_895} />
      <View style={styles.View_327_896} />
      <View style={styles.View_327_897} />
      <View style={styles.View_327_898} />
      <View style={styles.View_327_899} />
      <View style={styles.View_327_900} />
      <View style={styles.View_327_901} />
      <View style={styles.View_327_902} />
      <View style={styles.View_327_903} />
      <View style={styles.View_327_904} />
      <View style={styles.View_327_905} />
      <View style={styles.View_327_906} />
      <View style={styles.View_327_907} />
      <View style={styles.View_327_908} />
      <View style={styles.View_327_909} />
      <View style={styles.View_327_910} />
      <View style={styles.View_327_911} />
      <View style={styles.View_327_912} />
      <View style={styles.View_327_913} />
      <View style={styles.View_327_914} />
      <View style={styles.View_327_915} />
      <View style={styles.View_327_916}>
        <Text style={styles.Text_327_916}>ShadeCard</Text>
      </View>
      <View style={styles.View_327_917}>
        <Text style={styles.Text_327_917}>Product of Laxmi PrintArt</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fb44f05-d369-4e7f-9266-c65867a6818c"
        }}
        style={styles.ImageBackground_327_918}
      />
      <View style={styles.View_327_919} />
      <View style={styles.View_327_920} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91cc5a36-9552-4369-9a03-7de4f2a3400f"
        }}
        style={styles.ImageBackground_327_921}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe6ce0bf-af9d-4abe-8071-c6b6e6c9851d"
        }}
        style={styles.ImageBackground_327_922}
      />
      <View style={styles.View_327_923}>
        <Text style={styles.Text_327_923}>Standard</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44cd7132-f190-4a3a-bef4-7bdbdcc61a03"
        }}
        style={styles.ImageBackground_327_924}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82c1c00e-c38e-44a9-b7c5-5507bd4be1fc"
        }}
        style={styles.ImageBackground_327_925}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0054b0a0-8f4c-4e08-9f22-d353b1bb3afb"
        }}
        style={styles.ImageBackground_327_926}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/108b8166-89b0-4f27-b231-839c312afdad"
        }}
        style={styles.ImageBackground_327_927}
      />
      <View style={styles.View_327_928}>
        <Text style={styles.Text_327_928}>Dark</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0819402-2cd7-437a-abcb-668eb6086464"
        }}
        style={styles.ImageBackground_327_929}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b504b19-854a-4804-bf5d-081b9c7b4b43"
        }}
        style={styles.ImageBackground_327_930}
      />
      <View style={styles.View_327_931}>
        <Text style={styles.Text_327_931}>Front</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bae40fca-1961-4f0d-b987-413b2c15185c"
        }}
        style={styles.ImageBackground_327_932}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bca2579-744d-47bc-a9cf-decdf5c04745"
        }}
        style={styles.ImageBackground_327_933}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c66c0f72-c25b-4564-a1c0-64826c4c7ace"
        }}
        style={styles.ImageBackground_327_934}
      />
      <View style={styles.View_327_935}>
        <Text style={styles.Text_327_935}>Back</Text>
      </View>
      <View style={styles.View_327_936} />
      <View style={styles.View_327_937}>
        <Text style={styles.Text_327_937}>Choose PDF File</Text>
      </View>
      <View style={styles.View_327_938}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/053d9da6-8193-4ad1-b4f8-8f82bb5dfca8"
          }}
          style={styles.ImageBackground_327_939}
        />
        <View style={styles.View_327_940} />
      </View>
      <View style={styles.View_327_941} />
      <View style={styles.View_327_942}>
        <View style={styles.View_327_943}>
          <Text style={styles.Text_327_943}>Choose PDF File</Text>
        </View>
        <View style={styles.View_327_944}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f58754c5-6796-4689-bec1-e48c46880bf5"
            }}
            style={styles.ImageBackground_327_945}
          />
          <View style={styles.View_327_946} />
        </View>
      </View>
      <View style={styles.View_327_947}>
        <View style={styles.View_327_948} />
        <View style={styles.View_327_949}>
          <View style={styles.View_327_950} />
          <View style={styles.View_327_951}>
            <Text style={styles.Text_327_951}>Choose PDF File</Text>
          </View>
          <View style={styles.View_327_952}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43c90267-e570-4d21-bff9-a612c17cefa1"
              }}
              style={styles.ImageBackground_327_953}
            />
            <View style={styles.View_327_954} />
          </View>
        </View>
      </View>
      <View style={styles.View_327_955}>
        <Text style={styles.Text_327_955}>Light</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/166536ce-ea11-48f6-960a-4a7e56e1e175"
        }}
        style={styles.ImageBackground_327_956}
      />
      <View style={styles.View_327_957}>
        <Text style={styles.Text_327_957}>Cipla Info</Text>
      </View>
      <View style={styles.View_327_958}>
        <View style={styles.View_327_959} />
        <View style={styles.View_327_960}>
          <Text style={styles.Text_327_960}>Select Design</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63f93a8c-4856-413f-9395-699c37987706"
          }}
          style={styles.ImageBackground_327_961}
        />
      </View>
      <View style={styles.View_327_962}>
        <View style={styles.View_327_963} />
        <View style={styles.View_327_964}>
          <Text style={styles.Text_327_964}>Save</Text>
        </View>
      </View>
      <View style={styles.View_327_965} />
      <View style={styles.View_327_966}>
        <Text style={styles.Text_327_966}>Merge &amp; Download</Text>
      </View>
      <View style={styles.View_327_967}>
        <View style={styles.View_327_968}>
          <Text style={styles.Text_327_968}>Select File Path:</Text>
        </View>
        <View style={styles.View_327_969} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73e47683-4e3d-4265-ae8d-7476a54604a0"
          }}
          style={styles.ImageBackground_327_970}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6d81d77-da72-447f-bde7-c705ba101c51"
          }}
          style={styles.ImageBackground_327_971}
        />
      </View>
      <View style={styles.View_327_972}>
        <Text style={styles.Text_327_972}>Select “Artist Path” File:</Text>
      </View>
      <View style={styles.View_327_973}>
        <Text style={styles.Text_327_973}>Customize Input Table:</Text>
      </View>
      <View style={styles.View_327_974}>
        <Text style={styles.Text_327_974}>Select Shades</Text>
      </View>
      <View style={styles.View_327_975} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bdd3868-fd4c-4e61-bfb1-025425115978"
        }}
        style={styles.ImageBackground_327_976}
      />
      <View style={styles.View_327_977}>
        <Text style={styles.Text_327_977}>Settings</Text>
      </View>
      <View style={styles.View_327_978}>
        <View style={styles.View_327_979} />
        <View style={styles.View_327_980} />
        <View style={styles.View_327_981} />
        <View style={styles.View_327_982} />
        <View style={styles.View_327_983} />
        <View style={styles.View_327_984} />
        <View style={styles.View_327_985} />
        <View style={styles.View_327_986} />
        <View style={styles.View_327_987} />
        <View style={styles.View_327_988} />
        <View style={styles.View_327_989} />
        <View style={styles.View_327_990} />
        <View style={styles.View_327_991} />
        <View style={styles.View_327_992} />
        <View style={styles.View_327_993} />
        <View style={styles.View_327_994} />
        <View style={styles.View_327_995} />
        <View style={styles.View_327_996} />
        <View style={styles.View_327_997} />
        <View style={styles.View_327_998} />
        <View style={styles.View_327_999} />
        <View style={styles.View_327_1000} />
        <View style={styles.View_327_1001} />
        <View style={styles.View_327_1002} />
        <View style={styles.View_327_1003} />
        <View style={styles.View_327_1004} />
        <View style={styles.View_327_1005} />
        <View style={styles.View_327_1006} />
        <View style={styles.View_327_1007} />
        <View style={styles.View_327_1008} />
        <View style={styles.View_327_1009} />
        <View style={styles.View_327_1010} />
        <View style={styles.View_327_1011} />
        <View style={styles.View_327_1012} />
        <View style={styles.View_327_1013} />
        <View style={styles.View_327_1014} />
        <View style={styles.View_327_1015} />
        <View style={styles.View_327_1016} />
        <View style={styles.View_327_1017}>
          <Text style={styles.Text_327_1017}>Lab Value - L</Text>
        </View>
        <View style={styles.View_327_1018}>
          <Text style={styles.Text_327_1018}>NA</Text>
        </View>
        <View style={styles.View_327_1019}>
          <Text style={styles.Text_327_1019}>NA</Text>
        </View>
        <View style={styles.View_327_1020}>
          <Text style={styles.Text_327_1020}>NA</Text>
        </View>
        <View style={styles.View_327_1021}>
          <Text style={styles.Text_327_1021}>NA</Text>
        </View>
        <View style={styles.View_327_1022}>
          <Text style={styles.Text_327_1022}>NA</Text>
        </View>
        <View style={styles.View_327_1023}>
          <Text style={styles.Text_327_1023}>NA</Text>
        </View>
        <View style={styles.View_327_1024}>
          <Text style={styles.Text_327_1024}>NA</Text>
        </View>
        <View style={styles.View_327_1025}>
          <Text style={styles.Text_327_1025}>NA</Text>
        </View>
        <View style={styles.View_327_1026}>
          <Text style={styles.Text_327_1026}>NA</Text>
        </View>
        <View style={styles.View_327_1027}>
          <Text style={styles.Text_327_1027}>NA</Text>
        </View>
        <View style={styles.View_327_1028}>
          <Text style={styles.Text_327_1028}>NA</Text>
        </View>
        <View style={styles.View_327_1029}>
          <Text style={styles.Text_327_1029}>NA</Text>
        </View>
        <View style={styles.View_327_1030}>
          <Text style={styles.Text_327_1030}>NA</Text>
        </View>
        <View style={styles.View_327_1031}>
          <Text style={styles.Text_327_1031}>NA</Text>
        </View>
        <View style={styles.View_327_1032}>
          <Text style={styles.Text_327_1032}>NA</Text>
        </View>
        <View style={styles.View_327_1033}>
          <Text style={styles.Text_327_1033}>NA</Text>
        </View>
        <View style={styles.View_327_1034}>
          <Text style={styles.Text_327_1034}>NA</Text>
        </View>
        <View style={styles.View_327_1035}>
          <Text style={styles.Text_327_1035}>NA</Text>
        </View>
        <View style={styles.View_327_1036}>
          <Text style={styles.Text_327_1036}>NA</Text>
        </View>
        <View style={styles.View_327_1037}>
          <Text style={styles.Text_327_1037}>NA</Text>
        </View>
        <View style={styles.View_327_1038}>
          <Text style={styles.Text_327_1038}>NA</Text>
        </View>
        <View style={styles.View_327_1039}>
          <Text style={styles.Text_327_1039}>NA</Text>
        </View>
        <View style={styles.View_327_1040}>
          <Text style={styles.Text_327_1040}>NA</Text>
        </View>
        <View style={styles.View_327_1041}>
          <Text style={styles.Text_327_1041}>NA</Text>
        </View>
        <View style={styles.View_327_1042}>
          <Text style={styles.Text_327_1042}>NA</Text>
        </View>
        <View style={styles.View_327_1043}>
          <Text style={styles.Text_327_1043}>NA</Text>
        </View>
        <View style={styles.View_327_1044}>
          <Text style={styles.Text_327_1044}>NA</Text>
        </View>
        <View style={styles.View_327_1045}>
          <Text style={styles.Text_327_1045}>NA</Text>
        </View>
        <View style={styles.View_327_1046}>
          <Text style={styles.Text_327_1046}>NA</Text>
        </View>
        <View style={styles.View_327_1047} />
        <View style={styles.View_327_1048} />
        <View style={styles.View_327_1049} />
        <View style={styles.View_327_1050} />
        <View style={styles.View_327_1051} />
        <View style={styles.View_327_1052} />
        <View style={styles.View_327_1053} />
        <View style={styles.View_327_1054} />
        <View style={styles.View_327_1055} />
        <View style={styles.View_327_1056}>
          <Text style={styles.Text_327_1056}>Pantone No.</Text>
        </View>
        <View style={styles.View_327_1057}>
          <Text style={styles.Text_327_1057}>NA</Text>
        </View>
        <View style={styles.View_327_1058}>
          <Text style={styles.Text_327_1058}>NA</Text>
        </View>
        <View style={styles.View_327_1059}>
          <Text style={styles.Text_327_1059}>NA</Text>
        </View>
        <View style={styles.View_327_1060}>
          <Text style={styles.Text_327_1060}>NA</Text>
        </View>
        <View style={styles.View_327_1061}>
          <Text style={styles.Text_327_1061}>NA</Text>
        </View>
        <View style={styles.View_327_1062}>
          <Text style={styles.Text_327_1062}>NA</Text>
        </View>
        <View style={styles.View_327_1063}>
          <Text style={styles.Text_327_1063}>NA</Text>
        </View>
        <View style={styles.View_327_1064}>
          <Text style={styles.Text_327_1064}>NA</Text>
        </View>
        <View style={styles.View_327_1065}>
          <Text style={styles.Text_327_1065}>NA</Text>
        </View>
        <View style={styles.View_327_1066}>
          <Text style={styles.Text_327_1066}>NA</Text>
        </View>
        <View style={styles.View_327_1067}>
          <Text style={styles.Text_327_1067}>NA</Text>
        </View>
        <View style={styles.View_327_1068}>
          <Text style={styles.Text_327_1068}>Lab Value - a</Text>
        </View>
        <View style={styles.View_327_1069}>
          <Text style={styles.Text_327_1069}>Lab Value - b</Text>
        </View>
        <View style={styles.View_327_1070}>
          <Text style={styles.Text_327_1070}>Delta E Value (rEab)</Text>
        </View>
        <View style={styles.View_327_1071}>
          <Text style={styles.Text_327_1071}>
            Spectrophotometer Standard Setting
          </Text>
        </View>
      </View>
      <View style={styles.View_327_1072}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ed1ddf3-1ed4-4127-8984-9008acfbaf4c"
          }}
          style={styles.ImageBackground_327_1073}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c45ea4a-f68b-44c8-a4ec-601230da1491"
          }}
          style={styles.ImageBackground_327_1074}
        />
      </View>
      <View style={styles.View_327_1075}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c63a8224-0efb-4f3e-b880-cd47d4f43320"
          }}
          style={styles.ImageBackground_327_1076}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a477f6f0-afd0-4650-959d-f6013aa87ef9"
          }}
          style={styles.ImageBackground_327_1077}
        />
      </View>
      <View style={styles.View_327_1078}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf1d202c-548e-46d0-b6ed-fcd6c2805652"
          }}
          style={styles.ImageBackground_327_1079}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2586b8bc-7a92-4868-aea8-1ed051272584"
          }}
          style={styles.ImageBackground_327_1080}
        />
      </View>
      <View style={styles.View_327_1081}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40b8a2b4-44fa-417c-9e4a-697ffe0e2043"
          }}
          style={styles.ImageBackground_327_1082}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdb44749-114a-4e3b-b31a-24ffc0cb89ab"
          }}
          style={styles.ImageBackground_327_1083}
        />
      </View>
      <View style={styles.View_327_1084}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3974da02-2827-4216-b5ad-4001c3a10c44"
          }}
          style={styles.ImageBackground_327_1085}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24f4633b-4523-46b1-90c0-baa1f07f4812"
          }}
          style={styles.ImageBackground_327_1086}
        />
      </View>
      <View style={styles.View_327_1087}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f639c2b1-d31f-447a-adc4-f6b586caecf3"
          }}
          style={styles.ImageBackground_327_1088}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e0f42cc-149d-4c2d-99ca-159aca9248f5"
          }}
          style={styles.ImageBackground_327_1089}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75f8a235-1edf-4506-89db-ab137c5c895a"
        }}
        style={styles.ImageBackground_327_1090}
      />
      <View style={styles.View_327_1091}>
        <View style={styles.View_327_1092} />
        <TouchableOpacity
          style={styles.TouchableOpacity_327_1093}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("7_61"))
          }
        >
          <Text style={styles.Text_327_1093}>Artist Path</Text>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78a04fab-3dc5-4e21-9c98-347e059613a3"
          }}
          style={styles.ImageBackground_327_1094}
        />
        <View style={styles.View_327_1095}>
          <Text style={styles.Text_327_1095}>Packaging Development</Text>
        </View>
      </View>
      <View style={styles.View_327_1096} />
      <View style={styles.View_327_878}>
        <View style={styles.View_327_866} />
        <View style={styles.View_327_867}>
          <Text style={styles.Text_327_867}>
            Laxmi Printart, 4/211, Mittal Indu. Estate, Marol, Andheri(E),
            Mumbai-400059
          </Text>
        </View>
        <View style={styles.View_327_868}>
          <Text style={styles.Text_327_868}>Supplier Name and Address</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da55c735-137d-4778-8060-d1994996ca3b"
          }}
          style={styles.ImageBackground_327_869}
        />
        <View style={styles.View_327_870}>
          <Text style={styles.Text_327_870}>Santosh Panda</Text>
        </View>
        <View style={styles.View_327_871}>
          <Text style={styles.Text_327_871}>Prepared By</Text>
        </View>
        <View style={styles.View_327_872}>
          <View style={styles.View_I327_872_4_33} />
        </View>
        <View style={styles.View_327_873}>
          <Text style={styles.Text_327_873}>Update</Text>
        </View>
        <View style={styles.View_327_874}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86a6cf5a-e18b-4ce9-8719-8b0544674057"
            }}
            style={styles.ImageBackground_327_875}
          />
          <View style={styles.View_327_876} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("118%") },
  View_327_882: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("26%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  View_327_883: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("-4%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_884: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("6%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_885: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("122%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_886: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("13%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_887: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("129%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_888: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("33%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_889: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("149%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_890: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_891: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("117%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_892: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("20%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_893: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("137%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_894: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("6%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_895: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("122%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_896: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("22%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_897: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("139%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_898: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94%"),
    top: hp("7%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_899: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94%"),
    top: hp("123%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_900: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("56%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_901: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("132%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_902: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("47%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_903: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("122%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_904: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("61%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_905: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("136%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_906: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("64%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_907: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("18%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_908: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("94%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_909: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("46%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_910: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("121%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_911: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("38%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_912: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("113%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_913: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("13%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_914: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("88%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_915: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("74%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_916: {
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
  Text_327_916: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_917: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_327_917: {
    color: "rgba(136, 130, 132, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_918: {
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
  View_327_919: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("70%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  View_327_920: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("70%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  ImageBackground_327_921: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("74%")
  },
  ImageBackground_327_922: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("74%")
  },
  View_327_923: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_327_923: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_924: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("74%")
  },
  ImageBackground_327_925: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("29%")
  },
  ImageBackground_327_926: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("74%")
  },
  ImageBackground_327_927: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("74%")
  },
  View_327_928: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_327_928: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_929: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("74%")
  },
  ImageBackground_327_930: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("74%")
  },
  View_327_931: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_327_931: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_932: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("74%")
  },
  ImageBackground_327_933: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("74%")
  },
  ImageBackground_327_934: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("74%")
  },
  View_327_935: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_327_935: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_936: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("103%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  View_327_937: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("104%"),
    justifyContent: "flex-start"
  },
  Text_327_937: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_938: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("104%")
  },
  ImageBackground_327_939: {
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
  View_327_940: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 250, 255, 1)"
  },
  View_327_941: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("103%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  View_327_942: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("104%")
  },
  View_327_943: {
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
  Text_327_943: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_944: {
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
  ImageBackground_327_945: {
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
  View_327_946: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 250, 255, 1)"
  },
  View_327_947: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("26%")
  },
  View_327_948: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  View_327_949: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%")
  },
  View_327_950: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  View_327_951: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_327_951: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_952: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_327_953: {
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
  View_327_954: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 250, 255, 1)"
  },
  View_327_955: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_327_955: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_956: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("29%")
  },
  View_327_957: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_327_957: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_958: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("110%")
  },
  View_327_959: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 1
  },
  View_327_960: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_327_960: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_961: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_327_962: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("55%")
  },
  View_327_963: {
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
  View_327_964: {
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
  Text_327_964: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_965: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("110%"),
    backgroundColor: "rgba(222, 222, 222, 1)"
  },
  View_327_966: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("110%"),
    justifyContent: "center"
  },
  Text_327_966: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_967: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("13%")
  },
  View_327_968: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_327_968: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_969: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  ImageBackground_327_970: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  ImageBackground_327_971: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("1%")
  },
  View_327_972: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_327_972: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_973: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_327_973: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_974: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("65%"),
    justifyContent: "center"
  },
  Text_327_974: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_975: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("13%"),
    backgroundColor: "rgba(29, 78, 137, 1)",
    opacity: 0.07999999821186066,
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 2
  },
  ImageBackground_327_976: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("14%"),
    resizeMode: "cover"
  },
  View_327_977: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_327_977: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_978: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("28%")
  },
  View_327_979: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 1
  },
  View_327_980: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  View_327_981: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_982: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_983: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_984: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_985: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_986: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_987: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_988: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_989: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_990: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_991: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_992: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_993: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_994: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_995: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_996: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_997: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_998: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_999: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1000: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1001: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1002: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1003: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1004: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1005: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1006: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1007: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1008: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1009: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1010: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1011: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1012: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1013: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1014: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1015: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1016: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1017: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_327_1017: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1018: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_1018: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1019: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_1019: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1020: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_1020: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1021: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_1021: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1022: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_1022: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1023: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_1023: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1024: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_1024: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1025: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_1025: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1026: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_1026: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1027: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_1027: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1028: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_1028: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1029: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_1029: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1030: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_1030: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1031: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_1031: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1032: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_1032: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1033: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_1033: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1034: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_1034: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1035: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_1035: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1036: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_1036: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1037: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_1037: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1038: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_1038: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1039: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_1039: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1040: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_1040: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1041: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_1041: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1042: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_1042: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1043: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_1043: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1044: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_1044: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1045: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_1045: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1046: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_1046: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1047: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1048: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1049: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1050: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1051: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1052: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1053: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1054: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1055: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_1056: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_327_1056: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1057: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_1057: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1058: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_1058: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1059: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_1059: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1060: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_1060: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1061: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_1061: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1062: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_1062: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1063: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_1063: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1064: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_1064: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1065: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_1065: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1066: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_1066: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1067: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_1067: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1068: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_327_1068: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1069: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_327_1069: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1070: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_327_1070: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1071: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_327_1071: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1072: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("74%")
  },
  ImageBackground_327_1073: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_1074: {
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
  View_327_1075: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("74%")
  },
  ImageBackground_327_1076: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_1077: {
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
  View_327_1078: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("74%")
  },
  ImageBackground_327_1079: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_1080: {
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
  View_327_1081: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("74%")
  },
  ImageBackground_327_1082: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_1083: {
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
  View_327_1084: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("74%")
  },
  ImageBackground_327_1085: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_1086: {
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
  View_327_1087: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("29%")
  },
  ImageBackground_327_1088: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_1089: {
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
  ImageBackground_327_1090: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("58%")
  },
  View_327_1091: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("48%")
  },
  View_327_1092: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_327_1093: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_327_1093: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_1094: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%")
  },
  View_327_1095: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_1095: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_1096: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("116%"),
    minHeight: hp("116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(69, 69, 69, 1)",
    opacity: 0.4000000059604645
  },
  View_327_878: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("35%")
  },
  View_327_866: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_327_867: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_327_867: {
    color: "rgba(117, 116, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_868: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_327_868: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_869: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("18%")
  },
  View_327_870: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_327_870: {
    color: "rgba(117, 116, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_871: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_327_871: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_872: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I327_872_4_33: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  View_327_873: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_327_873: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_874: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("4%")
  },
  ImageBackground_327_875: {
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
  View_327_876: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(170, 183, 198, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
