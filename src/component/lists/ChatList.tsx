import React from "react";
import { StyleSheet, FlatList, ListRenderItem } from "react-native";
import { InviteCard } from "../cards/MessageCard";
import SectionHeader from "../SectionHeader";
import { Search } from "lucide-react-native";
import { users, User } from "@/src/data";

const renderItem: ListRenderItem<User> = ({ item }) => (
  <InviteCard
    profilePicture={item.profilePicture}
    isOnline={item.isOnline}
    name={item.name}
    lastMessage={item.lastMessage}
    timestamp={item.timestamp}
    unreadMessages={item.unreadMessages}
  />
);

const keyExtractor = (item: User) => item.id.toString();

const ChatList: React.FC = () => {
  return (
    <>
      <SectionHeader title="Chats" Icon={Search} />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.container}
      />
    </>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    gap: 12,
    padding: 16,
  },
});