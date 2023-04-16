//My custom solution for showing search-related youtube videos without api access
//Usage:
//const youtube = new YouTube('.videos', 5);
//document.getElementById('searchButton').addEventListener('click', () => {
//    youtube.search(document.getElementById('searchQuery').value);
//});
class YouTube {
    constructor(videosSelector, numVideos) {
        this.videosSelector = videosSelector || '';
        this.numVideos = numVideos || 5;
        this.search = this.search.bind(this);
        this.renderVideos = this.renderVideos.bind(this);
    }
    //possible alternatives
    //crossorigin.me, allorigins.win, heroku-cors-proxy, anyorigin.com, crossorigin.net, crossorigin.tech
    //cors-proxy.htmldriven.com, cors.axelfox.workers.dev, cors.bridged.cc, cors.io, anyorigin.com
    //allow-any-origin.appspot.com, corsproxy.github.io, cors-anywhere.nhlakeside.repl.co, anyorigin.com
    //yacdn.org/serve, cors.zme.ink, cors.universal.workers.dev, crossorigin.me, allorigins.win
    search(searchQuery, done) {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`)
            .then(response => response.text())
            .then(data => {
                // Extract the video IDs from the search results using regex
                const videoIds = [];
                const regex = /"videoId":"([^"]+)"/g;
                let match, count = 0;
                while (match = regex.exec(data)) {
                    // Add the video ID to the array if it doesn't already exist,
                    // and skip the first video ID
                    if (!videoIds.includes(match[1])) {
                        count++;
                        if (count > 1) videoIds.push(match[1]); // 1st video might be trash
                    }
                    if (videoIds.length >= this.numVideos) break;
                }
                this.renderVideos(videoIds);
                if (done) done();
            })
            .catch(error => { console.log('Error:', error) });
    }

    renderVideos(videoIds) {
        // Embed the videos horizontally in the div
        const videosDiv = document.querySelector(this.videosSelector);
        videosDiv.innerHTML = '';
        for (const videoId of videoIds) {
            const videoDiv = document.createElement('div');
            videoDiv.classList.add('video');
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.frameborder = '0';
            iframe.allowfullscreen = 'true';
            videoDiv.appendChild(iframe);
            videosDiv.appendChild(videoDiv);
        }
    }
}