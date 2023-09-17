import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
	switch (action.type) {
		case "get_blogposts":
			return action.payload;

		case "add_blogpost":
			return [
				...state,
				{
					id: Math.floor(Math.random() * 1000000),
					title: action.payload.title,
					content: action.payload.content,
				},
			];

		case "edit_blogpost":
			return state.map((blogPost) =>
				blogPost.id === action.payload.id ? action.payload : blogPost
			);

		case "delete_blogpost":
			return state.filter((blogPost) => blogPost.id !== action.payload);

		default:
			return state;
	}
};

const getBlogPosts = (dispatch) => async () => {
	const response = await jsonServer.get("blogposts");
	dispatch({ type: "get_blogposts", payload: response.data });
};

const addBlogPost = (dispatch) => async (title, content) =>
	await jsonServer.post("blogposts", { title, content });

const editBlogPost = (dispatch) => async (id, title, content) => {
	await jsonServer.put(`blogposts/${id}`, { title, content });
	dispatch({ type: "edit_blogpost", payload: { id, title, content } });
};

const deleteBlogPost = (dispatch) => async (id) => {
	await jsonServer.delete(`blogposts/${id}`);
	dispatch({ type: "delete_blogpost", payload: id });
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ getBlogPosts, addBlogPost, editBlogPost, deleteBlogPost },
	[]
);
