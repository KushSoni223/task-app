/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  eventList,
  favoriteEvent,
  removeFavoriteEvent,
} from '../../redux/actions';
import {fontSize, IcBackArrow, IcLike, IcShare, size} from '../../theme';

const EventCard = ({item, index, isSelected, onPress}) => {
  return (
    <View tabIndex={index} style={styles.card}>
      <Image source={{uri: item?.event_profile_img}} style={styles.image} />
      <View style={styles.cardContent}>
        <Text numberOfLines={1} style={styles.title}>
          {item.event_name}
        </Text>
        <Text numberOfLines={1} style={styles.date}>
          {item.readable_from_date} - {item?.readable_to_date}
        </Text>
        <Text style={styles.price}>
          €{item.event_price_from} - €{item?.event_price_to}
        </Text>
        <View style={styles.tagContainer}>
          {item.danceStyles.map((tag, indexs) => (
            <Text key={indexs} style={styles.tag}>
              {tag?.ds_name}
            </Text>
          ))}
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          width: '28%',
          alignItems: 'flex-end',
        }}>
        <IcBackArrow />
        <Text style={styles.location}>
          {item.city}, {item?.country}
        </Text>
        <View
          style={{
            gap: size.moderateScale(10),
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity>
            <IcShare />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <IcLike fill={isSelected ? 'green' : 'transparent'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const EventListScreen = () => {
  const dispatch = useDispatch();
  const userLoginResponse = useSelector(state => {
    return state.authReducer.userLoginResponse;
  });

  const [eventsList, setEventsList] = useState([]);

  const getEventsList = async () => {
    try {
      const res = await dispatch(eventList());
      if (res) {
        setEventsList(res?.data?.events);
      }
    } catch (error) {
      console.loh('erroor', error);
    }
  };

  useEffect(() => {
    getEventsList();
  }, []);

  const storeEventId = useSelector(state => {
    return state.authReducer.favoriteEventIds;
  });

  const onFavoritePress = async eventId => {
    try {
      await dispatch(favoriteEvent(eventId));
    } catch (error) {
      console.log('error', error);
    }
  };
  const onRemoveFavoritePress = async eventId => {
    try {
      await dispatch(removeFavoriteEvent(eventId));
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          marginBottom: size.moderateScale(20),
          paddingVertical: size.moderateScale(20),
          elevation: size.moderateScale(10),
        }}>
        <Text style={styles.header}>
          Hello {userLoginResponse?.user?.usr_fname}!
        </Text>
        <Text style={styles.subHeader}>Are you ready to dance?</Text>
      </View>
      <FlatList
        data={eventsList}
        keyExtractor={(_item, index) => index?.toString()}
        renderItem={({item, index}) => (
          <EventCard
            item={item}
            index={index}
            isSelected={storeEventId?.includes(item?.event_date_id)}
            onPress={() => {
              storeEventId?.includes(item?.event_date_id)
                ? onRemoveFavoritePress(item?.event_date_id)
                : onFavoritePress(item?.event_date_id);
            }}
            ListEmptyComponent={() => {
              return (
                <View style={{flex: 1}}>
                  <Text style={{color: 'black', textAlign: 'center'}}>
                    No Event List Found
                  </Text>
                </View>
              );
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ccc'},
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
    paddingHorizontal: size.moderateScale(10),
  },
  subHeader: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
    paddingHorizontal: size.moderateScale(10),
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: size.moderateScale(10),
    marginBottom: 10,
    height: size.moderateScale(100),
  },
  image: {
    width: size.moderateScale(80),
    height: size.moderateScale(80),
    backgroundColor: 'red',
    borderRadius: 5,
  },
  cardContent: {flex: 1, marginLeft: 10},
  title: {fontSize: 16, fontWeight: 'bold'},
  date: {color: 'green', fontSize: fontSize.mediumSmall},
  price: {fontSize: fontSize.mediumSmall, fontWeight: 'bold', color: 'gray'},
  location: {color: 'gray', fontSize: fontSize.littleSmall, textAlign: 'right'},
  tagContainer: {
    flexDirection: 'row',
    marginTop: 5,
    flexWrap: 'wrap',
    gap: size.moderateScale(5),
    height: size.moderateScale(25),
    overflow: 'hidden',
  },
  tag: {
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    padding: 5,
    // marginRight: 5,
    fontSize: size.moderateScale(9),
  },
});
