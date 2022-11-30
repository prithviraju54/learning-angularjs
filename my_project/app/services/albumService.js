(function () {
    app.service('albumProvider',function(){
        var albums = [
            {
                name:'Govinda',
                title:'Father',
                date:'1975/11/18',
                description:'Pics of my Dad',
                photos: [
                    {
                        filename: '1.jpg',
                        date:'2022/11/30',
                        description:'some description'},
                    {
                        filename: '2.jpg',
                        date:'2022/11/30',
                        description:'some description'},
                    {
                        filename: '3.jpg',
                        date:'2022/11/30',
                        description:'some description'
                    },
                    {
                        filename: '4.jpg',
                        date:'2022/11/30',
                        description:'some description'},
                    {
                        filename: '5.jpg',
                        date:'2022/11/30',
                        description:'some description'},
                    {
                        filename: '6.jpg',
                        date:'2022/11/30',
                        description:'some description'
                    }
        
                ]
            },
            {
                name:'Rama',
                title:'Mother',
                date:'1980/04/16',
                description:'Pics of my Mom',
                photos: [
                    {
                        filename: '1.jpg',
                        date:'2022/11/30',
                        description:'some description'},
                    {
                        filename: '2.jpg',
                        date:'2022/11/30',
                        description:'some description'},
                    {
                        filename: '3.jpg',
                        date:'2022/11/30',
                        description:'some description'
                    },
                    {
                        filename: '4.jpg',
                        date:'2022/11/30',
                        description:'some description'},
                    {
                        filename: '5.jpg',
                        date:'2022/11/30',
                        description:'some description'}
        
                ]
            },
            {
                name:'Pavan',
                title:'Brother',
                date:'2002/02/23',
                description:'Pics of my Brother',
                photos: [
                    {
                        filename: '1.jpg',
                        date:'2022/11/30',
                        description:'some description'},
                    {
                        filename: '2.jpg',
                        date:'2022/11/30',
                        description:'some description'},
                    {
                        filename: '3.jpg',
                        date:'2022/11/30',
                        description:'some description'
                    },
                    {
                        filename: '4.jpg',
                        date:'2022/11/30',
                        description:'some description'},
                    {
                        filename: '5.jpg',
                        date:'2022/11/30',
                        description:'some description'},
                    {
                        filename: '6.jpg',
                        date:'2022/11/30',
                        description:'some description'
                    }
        
                ]
            },
            {
                name:'Arya',
                title:'Puppy',
                date:'2022/10/05',
                description:'Pics of my Puppy',
                photos: [
                    {
                        filename: '1.jpg',
                        date:'2022/11/30',
                        description:'some description'},
                    {
                        filename: '2.jpg',
                        date:'2022/11/30',
                        description:'some description'},
                    {
                        filename: '3.jpg',
                        date:'2022/11/30',
                        description:'some description'
                    },
                    {
                        filename: '4.jpg',
                        date:'2022/11/30',
                        description:'some description'},
                    {
                        filename: '5.jpg',
                        date:'2022/11/30',
                        description:'some description'},
                    {
                        filename: '6.jpg',
                        date:'2022/11/30',
                        description:'some description'
                    },
                    {
                        filename: '7.jpg',
                        date:'2022/11/30',
                        description:'some description'},
                    {
                        filename: '8.jpg',
                        date:'2022/11/30',
                        description:'some description'}
        
                ]
            }
        ];
                
        this.getAlbums = function() {
            return albums;
        };

        this.getAlbumByName = function(name) {
            for(var i=0; i< albums.length; i++){
                if(name.toLowerCase()==albums[i].name.toLowerCase())
                    return albums[i];
            }
            throw new Error("not_found");
        };

        this.addAlbum = function (album_data) {
            for (var i = 0; i < albums.length; i++) {
                if (albums[i].name == album_data.name)
                    throw new Error("duplicate_album_name");
            }

            if (!album_data.title) throw new Error("missing_title");
            if (!album_data.date) throw new Error("missing_date");
            if (!album_data.description) throw new Error("missing_description");
            

            var d = new Date(album_data.date.trim());
            if (isNaN(d.getTime())) throw new Error("bad_date");
            albums.push(JSON.parse(JSON.stringify(album_data)));
        };
    });
}) ();