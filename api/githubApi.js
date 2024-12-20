import { useState } from "react";
import { GITHUB_API_TOKEN } from "@env";

const GITHUB_API_URL = "https://api.github.com";

export const verifyToken = async (token) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Invalid token");
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const fecthFromToken = async (endpoint, token = GITHUB_API_TOKEN) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
    }

    const dataJSON = await response.json();

    return dataJSON;
  } catch (error) {
    throw new Error("Error fetching token");
  }
};

export const fetchUserInfo = async (token) => {
  return await fecthFromToken("/user", token);
};

export const fetchUserRepositories = async (token, page = 1) => {
  return await fecthFromToken(`/user/repos?page=${page}`, token);
};

export const fetchUserIssues = async (token) => {
  fecthFromToken("/issues", token);
};
