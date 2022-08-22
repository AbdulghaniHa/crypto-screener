import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { useState, Fragment } from "react";
import { Menu } from "@headlessui/react";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter()
  const [open, setOpen] = useState(false);

  return (
      <div className="m-8">
        Home Page
      </div>
  );
}
