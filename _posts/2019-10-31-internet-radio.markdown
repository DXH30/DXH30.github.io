---
title: Mnggunakan MPD sebagai internet Radio
author: Didik
category: mpd
tags: music internet radio
---

MPD selain dapat digunakan sebagai music player, kita juga dapat memanfaatkan MPD sebagai internet radio. 

1. Sebelum lanjut, pastikan sudah dapat menggunakan MPD sebagai music player di artikel sebelumnya
2. Tambahkan konfigurasi dibawah ini
   
   ```console
	music_directory "~/Music"
	playlist_directory "~/.mpd/playlists"
	db_file "~/.mpd/mpd.db"
	log_file "~/.mpd/mpd.log"
	pid_file "~/.mpd/mpd.pid"
	state_file "~/.mpd/mpdstate"

	audio_output {
	type "pulse"
	name "Local Music Player Daemon"
	device "mpd"
	mixer_control "MPD"
	}

	audio_output {
		type		"httpd"
		name		"OnlineRadio"
		encoder		"vorbis"		# optional
		bind_to_address "0.0.0.0"
		port		"8000"
	#	quality		"5.0"			# do not define if bitrate is defined
		bitrate		"128"			# do not define if quality is defined
		format		"44100:16:1"
		always_on       "yes"			# prevent MPD from disconnecting all listeners when playback is stopped.
		tags            "yes"			# httpd supports sending tags to listening streams.
	}
   ```

3. Jadi, jalankan dengan
   ```console
   user@localhost:~$ mpd -c ~/.mpd/config
   ```
