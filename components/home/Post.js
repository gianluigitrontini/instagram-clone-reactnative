import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { POSTS } from '../../data/data';

export default function Post({ post }) {
  return (
    <View style={styles.postContainer}>
      <PostHeader post={post} />
      <PostContent post={post} />
      <PostFooter post={post} />
    </View>
  );
}

const PostHeader = ({ post }) => {
  return (
    <View style={[styles.container, postHeaderStyles.postHeaderContainer]}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
        <Image
          style={postHeaderStyles.postHeaderProfile}
          source={{
            uri: post.profile_picture,
          }}
        />
        {/* <View style={postHeaderStyles.postHeaderProfileBorder}></View> */}
      </View>

      <Text style={postHeaderStyles.postHeaderUser}>{post.user}</Text>

      <Image
        source={{
          uri: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/more.png',
        }}
        style={{ width: 20, height: 10, marginLeft: 'auto' }}
      />
    </View>
  );
};

const PostContent = ({ post }) => {
  return (
    <Image source={{ uri: post.imageUrl }} style={styles.postMediaContent} />
  );
};

const PostFooter = ({ post }) => {
  const [viewAllComments, setViewAllComments] = useState(false);
  return (
    <View style={[styles.container, postFooterStyles.footerContainer]}>
      <View style={postFooterStyles.postFooterLikesContainer}>
        <Image
          source={{
            uri: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/hearts.png',
          }}
          resizeMode='contain'
          style={postFooterStyles.icon}
        />
        {post.likes !== 0 && (
          <Text style={postFooterStyles.postFooterLikes}>
            {post.likes > 1
              ? post.likes + ' people like this picture.'
              : post.likes + ' person likes this picture.'}
          </Text>
        )}
      </View>
      <View style={postFooterStyles.postCaption}>
        <Text>
          <Text style={postFooterStyles.postCaptionUser}>{post.user}</Text>
          <Text style={postFooterStyles.textFiller}>&nbsp;</Text>
          <Text style={postFooterStyles.postCaptionText}>{post.caption}</Text>
        </Text>
      </View>
      {post.comments.length !== 0 &&
        viewAllComments === false &&
        (post.comments.length > 1 ? (
          <View>
            <Text
              onPress={() => setViewAllComments(true)}
              style={{ color: '#bbb', marginVertical: 2 }}>
              View all {post.comments.length} comments
            </Text>
            <Comment comment={post.comments[0]} />
          </View>
        ) : (
          <Comment comment={post.comments[0]} />
        ))}
      {viewAllComments === true &&
        post.comments.map((comment, i) => {
          return <Comment comment={comment} key={i} />;
        })}
    </View>
  );
};

const Comment = ({ comment }) => {
  return (
    <View style={postFooterStyles.postComments}>
      <Text>
        <Text style={postFooterStyles.postCommentsUser}>{comment.user}</Text>
        <Text style={postFooterStyles.textFiller}>&nbsp;</Text>
        <Text style={postFooterStyles.postCommentsComment} numberOfLines={3}>
          {comment.comment}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  postContainer: {
    width: '100%',
  },
  postMediaContent: {
    width: '100%',
    height: 400,
  },
});
const postHeaderStyles = StyleSheet.create({
  postHeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
  },
  postHeaderProfile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    position: 'relative',
  },
  postHeaderProfileBorder: {
    width: 48,
    height: 48,
    borderRadius: 100,
    borderColor: '#FF004D',
    borderWidth: 2,
    position: 'absolute',
  },
  postHeaderUser: {
    color: '#fff',
    marginLeft: 12,
    fontWeight: '700',
  },
});
const postFooterStyles = StyleSheet.create({
  footerContainer: {
    paddingVertical: 16,
  },
  postFooterLikesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postFooterLikes: {
    color: '#fff',
    fontWeight: '700',
    marginLeft: 6,
  },
  postCaption: {
    color: '#fff',
    marginVertical: 8,
  },

  postCaptionUser: {
    color: '#fff',
    fontWeight: '700',
  },
  postCaptionText: {
    color: '#fff',
  },
  postComments: {
    marginVertical: 2,
  },
  postCommentsUser: {
    color: '#fff',
    fontWeight: '700',
  },
  postCommentsComment: {
    color: '#fff',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
