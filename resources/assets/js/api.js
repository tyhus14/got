import { apiKey as apiKeyNew } from './keys';


var demoList = new Vue({

    el: '#mainContent',

    data: {
        items: [],
        seasonNumber: null,
        episodeNumber: null,
        activeSeason: null,
        activeEpisode: null
    },

    ready: function () {
        this.fetchDataStart();
    },

    methods: {
        fetchDataStart: function () {

            var apiURL = "https://api.themoviedb.org/3/tv/1399?api_key=" + apiKeyNew + "&append_to_response=" + "images";

            this.$http.get( apiURL, function( data ) {
                this.items = data;

                this.seasonNumber = this.items.seasons.length - 1;
            });
        },

        changeSeason: function (number) {

            var apiURL = "https://api.themoviedb.org/3/tv/1399/season/" + number +"?api_key=" + apiKeyNew + "&append_to_response=" + "images";

            this.$http.get( apiURL, function( data ) {
                this.items = data;
                this.episodeNumber = this.items.episodes.length;
            });

            this.activeSeason = number;
        },

        changeEpisode: function (seasonNumber, number) {

            var apiURL = "https://api.themoviedb.org/3/tv/1399/season/" + seasonNumber + "/episode/" + number + "?api_key=" + apiKeyNew + "&append_to_response=" + "images";

            this.$http.get( apiURL, function( data ) {
                this.items = data;
            });

            this.activeEpisode = number;
        }
    }

    // methods: {
    //     fetchDataStart: function () {
    //
    //         var apiURL = "https://api.themoviedb.org/3/tv/1399/season/1?api_key=" + apiKeyNew + "&append_to_response=" + "images";
    //
    //         this.$http.get( apiURL, function( data ) {
    //             this.items = data;
    //             this.episodeNumber = this.items.episodes.length;
    //         });
    //     },
    //
    //     changeSeason: function (number) {
    //
    //         var apiURL = "https://api.themoviedb.org/3/tv/1399/season/1/episode/" + number + "?api_key=" + apiKeyNew + "&append_to_response=" + "images";
    //
    //         this.$http.get( apiURL, function( data ) {
    //             this.items = data;
    //         });
    //     },
    //
    //     changeEpisode: function (number) {
    //
    //         var apiURL = "https://api.themoviedb.org/3/tv/1399/season/1/episode/" + number + "?api_key=" + apiKeyNew + "&append_to_response=" + "images";
    //
    //         this.$http.get( apiURL, function( data ) {
    //             this.items = data;
    //         });
    //     }
    // }
});
