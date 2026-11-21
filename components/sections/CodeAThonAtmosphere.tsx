"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import backdrop from "@/public/prizes/gta-vi-background.png";
import driftCar from "@/public/prizes/codeathon-drift-car.webp";

const songId = "-uj9b1qcf0Y";
type MusicPlayer = {
  loadVideoById(video: { videoId: string; startSeconds: number }): void;
  getCurrentTime(): number;
  pauseVideo(): void;
  unMute(): void;
  setVolume(volume: number): void;
  getIframe(): HTMLIFrameElement;
  destroy(): void;
};
type PlayerEvent = { target: MusicPlayer; data: number };
type YouTubeAPI = {
  ready(callback: () => void): void;
  Player: new (element: HTMLElement, options: {
    host: string;
    videoId: string;
    width: number;
    height: number;
    playerVars: Record<string, string | number>;
    events: Record<string, (event: PlayerEvent) => void>;
  }) => MusicPlayer;
};
const youtube = () => (window as Window & { YT?: YouTubeAPI }).YT;

export function CodeAThonMobilePoster() {
  return (
    <div className="feature-mobile-poster" aria-hidden="true">
      <Image src={backdrop} alt="" fill unoptimized sizes="(max-width: 639px) 100vw, 0px" />
    </div>
  );
}

export function CodeAThonAtmosphere() {
  const atmosphere = useRef<HTMLDivElement>(null);
  const musicHost = useRef<HTMLDivElement>(null);
  const player = useRef<MusicPlayer | null>(null);
  const playerReady = useRef(false);
  const visible = useRef(false);
  const blocked = useRef(false);
  const [entered, setEntered] = useState(false);
  const [entranceDone, setEntranceDone] = useState(false);
  const [apiReady, setApiReady] = useState(false);

  function syncMusic() {
    const current = player.current;
    if (!current || !playerReady.current) return;
    if (!visible.current || document.hidden) {
      current.pauseVideo();
      return;
    }
    current.unMute();
    current.loadVideoById({ videoId: songId, startSeconds: current.getCurrentTime() });
  }

  useEffect(() => {
    const box = atmosphere.current?.closest("article");
    if (!box) return;
    const observer = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting;
      if (entry.isIntersecting) setEntered(true);
      syncMusic();
    }, { threshold: 0 });
    observer.observe(box);

    function retryAfterInteraction() {
      if (blocked.current) syncMusic();
    }
    document.addEventListener("visibilitychange", syncMusic);
    document.addEventListener("pointerdown", retryAfterInteraction);
    document.addEventListener("keydown", retryAfterInteraction);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncMusic);
      document.removeEventListener("pointerdown", retryAfterInteraction);
      document.removeEventListener("keydown", retryAfterInteraction);
    };
  }, []);

  useEffect(() => {
    const api = youtube();
    if (!apiReady || !api || !musicHost.current) return;
    const mount = document.createElement("div");
    musicHost.current.appendChild(mount);
    const instance = new api.Player(mount, {
      host: "https://www.youtube-nocookie.com",
      videoId: songId,
      width: 200,
      height: 200,
      playerVars: { controls: 0, disablekb: 1, playsinline: 1, origin: window.location.origin },
      events: {
        onReady: ({ target }) => {
          playerReady.current = true;
          target.getIframe().tabIndex = -1;
          target.getIframe().title = "Se Me Nota (Agarrame), event background music";
          target.setVolume(30);
          syncMusic();
        },
        onAutoplayBlocked: () => { blocked.current = true; },
        onStateChange: ({ target, data }) => {
          if (data === 1) blocked.current = false;
          if (data === 0 && visible.current && !document.hidden) {
            target.loadVideoById({ videoId: songId, startSeconds: 0 });
          }
        },
      },
    });
    player.current = instance;
    return () => {
      playerReady.current = false;
      instance.destroy();
      player.current = null;
    };
  }, [apiReady]);

  return (
    <>
      {entered ? (
        <Script src="https://www.youtube.com/iframe_api" strategy="lazyOnload"
          onReady={() => youtube()?.ready(() => setApiReady(true))} />
      ) : null}
      <div className="feature-atmosphere" ref={atmosphere} aria-hidden="true">
        <Image src={backdrop} alt="" fill unoptimized sizes="(max-width: 1120px) 100vw, 1080px" />
      </div>
      <div className="feature-audio" ref={musicHost} aria-hidden="true" />
      {entered && !entranceDone ? (
        <div className="feature-drift-stage" aria-hidden="true">
          <div className="feature-drift" onAnimationEnd={() => setEntranceDone(true)}>
            <Image src={driftCar} alt="" sizes="(max-width: 639px) 220px, 380px" loading="eager" />
          </div>
        </div>
      ) : null}
    </>
  );
}
