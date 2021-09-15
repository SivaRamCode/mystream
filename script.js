var videos = [
        {
          src : [
            'http://stream.flowplayer.org/bauhaus/624x260.webm',
            'http://stream.flowplayer.org/bauhaus/624x260.mp4',
            'http://stream.flowplayer.org/bauhaus/624x260.ogv'
          ],
          poster : 'http://flowplayer.org/media/img/demos/minimalist.jpg',
          title : 'Video 1'
        },
        {
          src : [
            'http://stream.flowplayer.org/night3/640x360.webm',
            'http://stream.flowplayer.org/night3/640x360.mp4',
            'http://stream.flowplayer.org/night3/640x360.ogv'
          ],
          poster : 'http://flowplayer.org/media/img/demos/playlist/railway_station.jpg',
          title : 'Video 2'
        },
        {
          src : [
            'http://stream.flowplayer.org/functional/624x260.webm',
            'http://stream.flowplayer.org/functional/624x260.mp4',
            'http://stream.flowplayer.org/functional/624x260.ogv'
          ],
          poster : 'http://flowplayer.org/media/img/demos/functional.jpg',
          title : 'Video 3'
        }
      ];
      var player = videojs('video');
      player.playList(videos, {
        getVideoSource: function(vid, cb) {
          cb(vid.src, vid.poster);
        }
      });
      $('[data-action=prev]').on('click', function(e) {
        player.prev();
      });
      $('[data-action=next]').on('click', function(e) {
        player.next();
      });