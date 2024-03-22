import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from "../assets/data/categoriesData";
import popularData from "../assets/data/popularData";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";
import iconData from "../assets/data/icondata";
import Entypo from 'react-native-vector-icons/Entypo';
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Home = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}>
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    );
  };



  return (
    <View style={styles.container}>
      <ScrollView >
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerwrapper}>
            <Image
              source={require('../assets/images/profile.png')}
              style={styles.profileImage}
            />
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Food</Text>
          <Text style={styles.titlesTitle}>Delivery</Text>
        </View>

        {/* Search */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/* Popular */}
        <View style={styles.popularWrapper}>
          
          <Text style={styles.popularTitle}>Popular</Text>
          {popularData.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate('Details', {
                  item: item,
                })
              }>
              <View
                style={[
                  styles.popularCardWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 20,
                  },
                ]}>
                <View>
               
                  <View>
                    
                    
                      <View style={styles.popularCardBottom}>
                        <View style={styles.ratingWrapper}>
                          <MaterialCommunityIcons
                            name="star"
                            size={10}
                            color={colors.textDark}
                          />
                          <Text style={styles.rating}>{item.rating}</Text>
                        </View>
                        <View style={styles.addPizzaButton}>
                          <Feather name="plus" size={10} color={colors.textDark} />
                        </View>
                      </View>
                    </View>
                    <View style={styles.popularTopWrapper}>
                    <MaterialCommunityIcons
                      name="crown"
                      size={12}
                      color={colors.primary}
                    />
                    <Text style={styles.popularTopText}>top of the week</Text>
                  </View>
                  <View style={styles.popularTitlesWrapper}>
                    <Text style={styles.popularTitlesTitle}>
                      {item.title}
                    </Text>
                    <Text style={styles.popularTitlesWeight}>
                      Weight {item.weight}
                    </Text>
                   </View>
                </View>
              </View>
              <View style={{marginRight:10,position:"absolute",marginTop:-6}}>
                  <Image source={item.image} style={{height:150,width:150,resizeMode:'contain'}}/>
                </View>
                <View style={{position:'absolute',marginTop:120,marginLeft:15}}> 
                    <Feather name='heart'size={15}/>
                    <Text style={styles.iconText}>Like</Text>
                   </View>
                   <View style={{position:'absolute',marginTop:120,marginLeft:50}}> 
                    <Feather name='share'size={15}/>
                    <Text style={styles.iconText}>Share</Text>
                   </View>
                   <View style={{position:'absolute',marginTop:120,marginLeft:90}}> 
                    <Entypo name='price-tag'size={15}/>
                    <Text style={styles.iconText}>Price</Text>
                   </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View>
        
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 25,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-Semibold',
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },

  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },

  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 180,
    flexDirection: 'row',
    paddingVertical:15,
    //overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -20,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    marginLeft: 19,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    flex:1,
marginRight:40,
    flexDirection:'row',
    
  },
  popularCardImage: {
    width: 210,
    height: 125,
    marginRight:40,
    //resizeMode: 'contain',
  },
  iconText: {
    //marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
  },
  

});
