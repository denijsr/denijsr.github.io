let previousImages = [];

function getRandomImage() {
    const images = [
        "positions/I-1 ab4.png",
        "positions/I-10 ab4 ba5 ba3 de5.png",
        "positions/I-11 ab4 ba5 ba3 fe5 gh4.png",
        "positions/I-12 ab4 ba5 ed4 ab6 fe3 ba7.png",
        "positions/I-13 ab4 ba5 ed4 ab6 fe3 dc5.png",
        "positions/I-14 ab4 ba5 ed4 ab6 fe3 fe5.png",
        "positions/I-15 ab4 ba5 ed4 ab6 fe3 hg5.png",
        "positions/I-16 ab4 ba5 ed4 dc5.png",
        "positions/I-17 ab4 ba5 ed4 dc5 bd6 ce5.png",
        "positions/I-18 ab4 ba5 ed4 fe5 df6 ge5.png",
        "positions/I-19 ab4 ba5 ed4 fe5 df6 eg5.png",
        "positions/I-2 ab4 ba5.png",
        "positions/I-20 ab4 ba5 ed4 fg5.png",
        "positions/I-21 ab4 ba5 ed4 hg5.png",
        "positions/I-22 ab4 ba5 gh4 fe5 hg3.png",
        "positions/I-23 ab4 ba5 gh4 fg5.png",
        "positions/I-3 ab4 ba5 ba3 ab6.png",
        "positions/I-4 ab4 ba5 ba3 ab6 ab2 dc5.png",
        "positions/I-5 ab4 ba5 ba3 ab6 ab2 de5.png",
        "positions/I-6 ab4 ba5 ba3 cb6 ab2 bc5.png",
        "positions/I-7 ab4 ba5 ba3 cb6 cb2 de5.png",
        "positions/I-8 ab4 ba5 ba3 cb6 gf4.png",
        "positions/I-9 ab4 ba5 ba3 cb6 gh4 fe5.png",
        "positions/II-1 a1-a5.png",
        "positions/II-10 a1-b4 a7-a5.png",
        "positions/II-11 a1-b4 a7-g5.png",
        "positions/II-12 a1-b4 b6-a5.png",
        "positions/II-13 a1-b4 d6-g5.png",
        "positions/II-14 a1-b4 h8-e5.png",
        "positions/II-15 a1-b4 h6-g5.png",
        "positions/II-16 a1-d4 a7-c5.png",
        "positions/II-17 a1-d4 a7-f4.png",
        "positions/II-18 a1-d4 b6-a5.png",
        "positions/II-19 a1-d4 b6-c5.png",
        "positions/II-2 a1-a5 a7-h4.png",
        "positions/II-20 a1-d4 f6-e5.png",
        "positions/II-21 a1-d4 h8-e5.png",
        "positions/II-22 a1-d4 h6-g5.png",
        "positions/II-23 a1-c5 g7-g5.png",
        "positions/II-3 a1-a5 b6-g5.png",
        "positions/II-4 a1-a5 b6-h4.png",
        "positions/II-5 a1-a5 f6-h4.png",
        "positions/II-6 a1-a5 g7-e5.png",
        "positions/II-7 a1-a5 g7-g5.png",
        "positions/II-8 a1-a5 g7-h4.png",
        "positions/II-9 a1-a5 h6-b4.png",
        "positions/III-1 ab4 bc5 .png",
        "positions/III-10 ab4 dc5 bd6 ec5 gh4.png",
        "positions/III-11 ab4 dc5 bd6 ce5 ef4.png",
        "positions/III-12 ab4 de5.png",
        "positions/III-13 ab4 de5 ba5 fg5 ef4.png",
        "positions/III-14 ab4 de5 ba5 fg5 gh4.png",
        "positions/III-15 ab4 de5 ba3 fg5.png",
        "positions/III-16 ab4 de5 ba3 fg5 gf4.png",
        "positions/III-17 ab4 de5 ed4 hg5 ba5.png",
        "positions/III-18 ab4 de5 gh4.png",
        "positions/III-19 ab4 fe5.png",
        "positions/III-2 ab4 bc5 ba5 cb4.png",
        "positions/III-20 ab4 fe5 ba5 ef4.png",
        "positions/III-21 ab4 fe5 ba5 gf6.png",
        "positions/III-22 ab4 fe5 ef4.png",
        "positions/III-23 ab4 fe5 gh4 gf6.png",
        "positions/III-3 ab4 bc5 ba5 cb4 ed4 fe5.png",
        "positions/III-4 ab4 bc5 ba5 cb4 ed4 fg5.png",
        "positions/III-5 ab4 bc5 ba5 cb4 ed4 hg5.png",
        "positions/III-6 ab4 bc5 ba5 cb4 gf4 fe5.png",
        "positions/III-7 ab4 bc5 ba5 cb4 gh4.png",
        "positions/III-8 ab4 bc5 ba5 fg5.png",
        "positions/III-9 ab4 dc5.png",
        "positions/IV-1 a1-e5 d6-g5.png",
        "positions/IV-10 a3-a5 a7-a3.png",
        "positions/IV-11 a3-a5 b6-a3.png",
        "positions/IV-12 a3-a5 d6-b4.png",
        "positions/IV-13 a3-a5 f6-a3.png",
        "positions/IV-14 a3-a5 h6-a3.png",
        "positions/IV-15 a3-a5 h6-b4.png",
        "positions/IV-16 a3-a5 h6-e5.png",
        "positions/IV-17 a3-b4 b6-a3.png",
        "positions/IV-18 a3-b4 d6-a3.png",
        "positions/IV-19 a3-b4 e7-a5.png",
        "positions/IV-2 a1-e5 g7-h4.png",
        "positions/IV-20 a3-b4 h6-a3.png",
        "positions/IV-21 a3-b4 h6-e5.png",
        "positions/IV-22 a3-b4 h8-a3.png",
        "positions/IV-23 a3-c5 b6-a3.png",
        "positions/IV-3 a1-f4 a7-c5.png",
        "positions/IV-4 a1-f4 b6-c5.png",
        "positions/IV-5 a1-f4 c7-a5.png",
        "positions/IV-6 a1-f4 d6-c5.png",
        "positions/IV-7 a1-f4 e7-e5.png",
        "positions/IV-8 a1-f4 f6-e5.png",
        "positions/IV-9 a1-g5 d6-e5.png",
        "positions/IX-1 cb4 fe5 dc3 gf6.png",
        "positions/IX-10 cb4 fg5 ed4 ef6.png",
        "positions/IX-11 cb4 fg5 ed4 gf4.png",
        "positions/IX-12 cb4 hg5.png",
        "positions/IX-13 cb4 hg5 ba5 gh4 ed4.png",
        "positions/IX-14 cb4 hg5 gf4 gh4 fg5 ba5.png",
        "positions/IX-15 cb4 hg5 gh4 ba5.png",
        "positions/IX-16 cb4 hg5 gh4 de5.png",
        "positions/IX-17 cb4 hg5 gh4 gh6 bc5.png",
        "positions/IX-18 cb4 hg5 gh4 gh6 hg3.png",
        "positions/IX-19 cd4.png",
        "positions/IX-2 cb4 fe5 ef4 ba5.png",
        "positions/IX-20 cd4 ba5 bc3.png",
        "positions/IX-21 cd4 ba5 bc3 ab6.png",
        "positions/IX-22 cd4 ba5 bc3 ab6 ab2 dc5.png",
        "positions/IX-23 cd4 ba5 bc3 ab6 ef4.png",
        "positions/IX-3 cb4 fe5 ef4 ba5 bc5.png",
        "positions/IX-4 cb4 fe5 ef4 gf6 bc3.png",
        "positions/IX-5 cb4 fe5 ef4 gf6 de3 bc5.png",
        "positions/IX-6 cb4 fe5 gh4 ba5 hg5.png",
        "positions/IX-7 cb4 fe5 gh4 bc5 hg5.png",
        "positions/IX-8 cb4 fg5 ed4 ba5.png",
        "positions/IX-9 cb4 fg5 ed4 dc5.png",
        "positions/V-1 ab4 fe5 gh4 gf6 fg3.png",
        "positions/V-10 ab4 hg5 gh4 ba5.png",
        "positions/V-11 ab4 hg5 gh4 gf4.png",
        "positions/V-12 cb4.png",
        "positions/V-13 cb4 ba5 bc5 db4 ac5 cb6.png",
        "positions/V-14 cb4 ba5 bc5 db4 ac5 fe5.png",
        "positions/V-15 cb4 ba5 dc3 fe5 gh4 cb6.png",
        "positions/V-16 cb4 ba5 dc3 hg5.png",
        "positions/V-17 cb4 ba5 ef4.png",
        "positions/V-18 cb4 ba5 gf4.png",
        "positions/V-19 cb4 ba5 gh4 ac3 bd4 de5.png",
        "positions/V-2 ab4 fg5.png",
        "positions/V-20 cb4 bc5.png",
        "positions/V-21 cb4 bc5 bc3 fe5 ed4.png",
        "positions/V-22 cb4 bc5 bc3 fg5 cd4 ab6.png",
        "positions/V-23 cb4 bc5 bc3 fg5 ed4.png",
        "positions/V-3 ab4 fg5 ba5 gf6 ed4.png",
        "positions/V-4 ab4 fg5 ba3 ef6 ed4.png",
        "positions/V-5 ab4 fg5 bc5 db4.png",
        "positions/V-6 ab4 hg5.png",
        "positions/V-7 ab4 hg5 ba3 gf4.png",
        "positions/V-8 ab4 hg5 gf4 bc5.png",
        "positions/V-9 ab4 hg5 gf4 gh6.png",
        "positions/VI-1 a3-c5 d6-a3.png",
        "positions/VI-10 a3-d4 g7-a5.png",
        "positions/VI-11 a3-d4 h8-a3.png",
        "positions/VI-12 a3-d4 h8-h4.png",
        "positions/VI-13 a3-e5 a7-c5.png",
        "positions/VI-14 a3-e5 b6-a3.png",
        "positions/VI-15 a3-e5 g7-a3.png",
        "positions/VI-16 a3-e5 h8-a3.png",
        "positions/VI-17 a3-f4 ---.png",
        "positions/VI-18 a3-f4 a7-c5.png",
        "positions/VI-19 a3-f4 c7-c5.png",
        "positions/VI-2 a3-c5 f6-a3.png",
        "positions/VI-20 a3-g5 a7-a3.png",
        "positions/VI-21 a3-g5 b6-a3.png",
        "positions/VI-22 a3-g5 c7-a3.png",
        "positions/VI-23 a3-g5 d6-a3.png",
        "positions/VI-3 a3-c5 g7-a3.png",
        "positions/VI-4 a3-c5 h8-a3.png",
        "positions/VI-5 a3-d4 b6-a3.png",
        "positions/VI-6 a3-d4 c7-a5.png",
        "positions/VI-7 a3-d4 e7-c5.png",
        "positions/VI-8 a3-d4 f6-a3.png",
        "positions/VI-9 a3-d4 g7-a3.png",
        "positions/VII-1 cb4 bc5 dc3 ab6.png",
        "positions/VII-10 cb4 dc5 bd6 ec5 gf4 ba5.png",
        "positions/VII-11 cb4 dc5 bd6 ce5 gh4 ba5.png",
        "positions/VII-12 cb4 de5.png",
        "positions/VII-13 cb4 de5 ba5 bc5.png",
        "positions/VII-14 cb4 de5 dc3 fg5.png",
        "positions/VII-15 cb4 de5 ef4 ba5.png",
        "positions/VII-16 cb4 de5 gf4.png",
        "positions/VII-17 cb4 de5 gf4 eg3 hf4 fe5.png",
        "positions/VII-18 cb4 de5 gh4 cd6.png",
        "positions/VII-19 cb4 fe5 ba5 bc5.png",
        "positions/VII-2 cb4 bc5 dc3 fe5.png",
        "positions/VII-20 cb4 fe5 bc3 gf6 ab2.png",
        "positions/VII-21 cb4 fe5 bc3 gf6 cb2 fg5.png",
        "positions/VII-22 cb4 fe5 bc3 gf6 ed4.png",
        "positions/VII-23 cb4 fe5 bc3 gf6 gh4 hg7.png",
        "positions/VII-3 cb4 bc5 dc3 fe5 ef4 ef6.png",
        "positions/VII-4 cb4 bc5 dc3 fe5 gh4 ab6.png",
        "positions/VII-5 cb4 bc5 dc3 fe5 gh4 gf6.png",
        "positions/VII-6 cb4 bc5 ed4 ce3 fd4 cb6.png",
        "positions/VII-7 cb4 bc5 ed4 ce3 fd4 de5.png",
        "positions/VII-8 cb4 bc5 gf4 ab6 hg3 fg5.png",
        "positions/VII-9 cb4 dc5.png",
        "positions/VIII-1 a3-g5 d6-c5.png",
        "positions/VIII-10 a3-h4 d6-c5.png",
        "positions/VIII-11 a3-h4 e7-a3.png",
        "positions/VIII-12 a3-h4 e7-a5.png",
        "positions/VIII-13 a3-h4 f6-a3.png",
        "positions/VIII-14 a3-h4 f6-c5.png",
        "positions/VIII-15 a3-h4 f6-e5.png",
        "positions/VIII-16 a3-h4 g7-a3.png",
        "positions/VIII-17 a3-h4 g7-a5.png",
        "positions/VIII-18 a3-h4 g7-c5.png",
        "positions/VIII-19 a3-h4 g7-e5.png",
        "positions/VIII-2 a3-g5 f6-a3.png",
        "positions/VIII-20 a3-h4 h6-a3.png",
        "positions/VIII-21 a3-h4 h6-a5.png",
        "positions/VIII-22 a3-h6 h6-c5.png",
        "positions/VIII-23 --- a7-a5.png",
        "positions/VIII-3 a3-g5 g7-a3.png",
        "positions/VIII-4 a3-g5 h8-a3.png",
        "positions/VIII-5 a3-h4 a7-a3.png",
        "positions/VIII-6 a3-h4 a7-a5.png",
        "positions/VIII-7 a3-h4 b6-c5.png",
        "positions/VIII-8 a3-h4 c7-a3.png",
        "positions/VIII-9 a3-h4 d6-a3.png",
        "positions/X-1 --- a7-c5.png",
        "positions/X-10 b2-b4 d6-g5.png",
        "positions/X-11 b2-b4 h8-a5.png",
        "positions/X-12 b2-b4 h6-e5.png",
        "positions/X-13 b2-c5 ---.png",
        "positions/X-14 b2-c5 g7-g5.png",
        "positions/X-15 b2-d4 ---.png",
        "positions/X-16 b2-d4 a7-g5.png",
        "positions/X-17 b2-d4 b6-c5.png",
        "positions/X-18 b2-d4 f6-c5.png",
        "positions/X-19 b2-d4 f6-e5.png",
        "positions/X-2 --- a7-g5.png",
        "positions/X-20 b2-d4 h8-h4.png",
        "positions/X-21 b2-e5 g7-a5.png",
        "positions/X-22 b2-e5 g7-h4.png",
        "positions/X-23 b2-f4 d6-c5.png",
        "positions/X-3 --- a7-h4.png",
        "positions/X-4 b2-a5 ---.png",
        "positions/X-5 b2-a5 a7-e5.png",
        "positions/X-6 b2-a5 a7-h4.png",
        "positions/X-7 b2-a5 b6-b4.png",
        "positions/X-8 b2-a5 f6-e5.png",
        "positions/X-9 b2-b4 d6-e5.png",
        "positions/XI-1 cd4 ba5 bc3 ab6 gf4.png",
        "positions/XI-10 cd4 ba5 dc3 fg5 gh4 ab6.png",
        "positions/XI-11 cd4 ba5 de5 df4.png",
        "positions/XI-12 cd4 ba5 ef4 dc5.png",
        "positions/XI-13 cd4 ba5 ef4 de5.png",
        "positions/XI-14 cd4 ba5 ef4 cb6 de3 dc5.png",
        "positions/XI-15 cd4 ba5 ef4 cb6 fe3 ab4.png",
        "positions/XI-16 cd4 ba5 ef4 fg5 fe3 ab4.png",
        "positions/XI-17 cd4 ba5 gf4 de5.png",
        "positions/XI-18 cd4 ba5 gf4 fe5 df6 eg5.png",
        "positions/XI-19 cd4 ba5 gh4 ab6 dc5.png",
        "positions/XI-2 cd4 ba5 bc3 de5.png",
        "positions/XI-20 cd4 bc5.png",
        "positions/XI-21 cd4 bc5 db6 ac5 bc3 de5.png",
        "positions/XI-22 cd4 bc5 db6 ac5 bc3 fe5.png",
        "positions/XI-23 cd4 bc5 db6 ca5.png",
        "positions/XI-3 cd4 ba5 bc3 de5 ef4.png",
        "positions/XI-4 cd4 ba5 bc3 de5 gf4.png",
        "positions/XI-5 cd4 ba5 bc3 fe5.png",
        "positions/XI-6 cd4 ba5 bc3 hg5 ab2.png",
        "positions/XI-7 cd4 ba5 bc3 hg5 cb2 gf4.png",
        "positions/XI-8 cd4 ba5 dc3 de5 gf4.png",
        "positions/XI-9 cd4 ba5 dc3 de5 gh4.png",
        "positions/XII-1 b2-g5 a7-a5.png",
        "positions/XII-10 b2-h6 h6-a5.png",
        "positions/XII-11 b2-h6 h6-e5.png",
        "positions/XII-12 b2-h6 h6-f4.png",
        "positions/XII-13 b6-h4 ---.png",
        "positions/XII-14 c1-a5 a7-c5.png",
        "positions/XII-15 c1-a5 f8-h4.png",
        "positions/XII-16 c1-h4 f6-g5.png",
        "positions/XII-17 c3-a5 a7-g5.png",
        "positions/XII-18 c3-a5 d6-g5.png",
        "positions/XII-19 c3-a5 d6-h4.png",
        "positions/XII-2 b2-g5 c7-a5.png",
        "positions/XII-20 c3-a5 f6-e5.png",
        "positions/XII-21 c3-a5 h8-g5.png",
        "positions/XII-22 c3-a5 h6-e5.png",
        "positions/XII-23 c3-b4 a7-a5.png",
        "positions/XII-3 b2-g5 d6-e5.png",
        "positions/XII-4 b2-g5 g7-a5.png",
        "positions/XII-5 b2-g5 h6-e5.png",
        "positions/XII-6 b2-g5 h8-a5.png",
        "positions/XII-7 b2-h4 a7-a5.png",
        "positions/XII-8 b2-h4 b6-a5.png",
        "positions/XII-9 b2-h4 g7-e5.png",
        "positions/XIII-1 cd4 bc5 db6 ca5 ed4.png",
        "positions/XIII-10 cd4 dc5 gh4 fe5.png",
        "positions/XIII-11 cd4 de5.png",
        "positions/XIII-12 cd4 de5 bc3 ed6 cb2 fe7.png",
        "positions/XIII-13 cd4 de5 bc3 ed6 ef4 fe7.png",
        "positions/XIII-14 cd4 de5 bc3 ed6 gf4.png",
        "positions/XIII-15 cd4 de5 bc3 ef4 eg5 fh4.png",
        "positions/XIII-16 cd4 de5 dc3.png",
        "positions/XIII-17 cd4 de5 gf4 ec3.png",
        "positions/XIII-18 cd4 de5 gf4 eg3.png",
        "positions/XIII-19 cd4 de5 gh4 ec3 bd4 fe5.png",
        "positions/XIII-2 cd4 dc5 bc3 cd6.png",
        "positions/XIII-20 cd4 fe5.png",
        "positions/XIII-21 cd4 fe5 df6 ge5 bc3.png",
        "positions/XIII-22 cd4 fe5 df6 ge5 gh4.png",
        "positions/XIII-23 cd4 fe5 df6 eg5 gf4 de7.png",
        "positions/XIII-3 cd4 dc5 bc3 cd6 ab2 de5.png",
        "positions/XIII-4 cd4 dc5 bc3 ed6 gh4.png",
        "positions/XIII-5 cd4 dc5 bc3 fg5 cb4 ba5.png",
        "positions/XIII-6 cd4 dc5 dc3 ed6 cb4 fg5.png",
        "positions/XIII-7 cd4 dc5 dc3 fe5.png",
        "positions/XIII-8 cd4 dc5 dc3 hg5.png",
        "positions/XIII-9 cd4 dc5 gf4 cd6 de5.png",
        "positions/XIV-1 c3-b4 a7-e5.png",
        "positions/XIV-10 c3-d4 e7-e5.png",
        "positions/XIV-11 c3-d4 f6-c5.png",
        "positions/XIV-12 c3-d4 h8-g5.png",
        "positions/XIV-13 c3-d4 h6-e5.png",
        "positions/XIV-14 c3-e5 b6-a5.png",
        "positions/XIV-15 c3-e5 g7-a5.png",
        "positions/XIV-16 c3-e5 g7-g5.png",
        "positions/XIV-17 c3-e5 g7-h4.png",
        "positions/XIV-18 c3-f4 ---.png",
        "positions/XIV-19 c3-f4 a7-e5.png",
        "positions/XIV-2 c3-b4 a7-h4.png",
        "positions/XIV-20 c3-f4 f6-b4.png",
        "positions/XIV-21 c3-f4 f6-e5.png",
        "positions/XIV-22 c3-f4 h8-h4.png",
        "positions/XIV-23 c3-f4 h6-c5.png",
        "positions/XIV-3 c3-b4 h8-g5.png",
        "positions/XIV-4 c3-b4 h6-e5.png",
        "positions/XIV-5 c3-c5 f6-g5.png",
        "positions/XIV-6 c3-c5 g7-e5.png",
        "positions/XIV-7 c3-c5 g7-h4.png",
        "positions/XIV-8 c3-d4 a7-e5.png",
        "positions/XIV-9 c3-d4 d6-a5.png",
        "positions/XIX-1 ed4 dc5 cb4 ce3 df4 cd6.png",
        "positions/XIX-10 ed4 de5 ab4 ed6.png",
        "positions/XIX-11 ed4 de5 de3 ed6.png",
        "positions/XIX-12 ed4 de5 fe3.png",
        "positions/XIX-13 ed4 de5 gf4 eg3 fh4 hg5.png",
        "positions/XIX-14 ed4 de5 gh4 hg5 fe3.png",
        "positions/XIX-15 ed4 fe5.png",
        "positions/XIX-16 ed4 fe5 df6 ge5 ab4 hg7.png",
        "positions/XIX-17 ed4 fe5 df6 ge5 ab4 hg5.png",
        "positions/XIX-18 ed4 fe5 df6 ge5 gh4 hg7.png",
        "positions/XIX-19 ed4 fe5 df6 eg5 fe3.png",
        "positions/XIX-2 ed4 dc5 fe3 cd6.png",
        "positions/XIX-20 ed4 fg5.png",
        "positions/XIX-21 ed4 fg5 fe3 bc5.png",
        "positions/XIX-22 ed4 fg5 fe3 ef6.png",
        "positions/XIX-23 ed4 fg5 fe3 ef6 gf2 bc5.png",
        "positions/XIX-3 ed4 dc5 fe3 ed6.png",
        "positions/XIX-4 ed4 dc5 fe3 fg5 gh4 cd6.png",
        "positions/XIX-5 ed4 dc5 fe3 fg5 gh4 gf6.png",
        "positions/XIX-6 ed4 dc5 fe3 fg5 gh4 gf4.png",
        "positions/XIX-7 ed4 dc5 gh4 ce3 fd4 ba5.png",
        "positions/XIX-8 ed4 de5.png",
        "positions/XIX-9 ed4 de5 ab4 cd6.png",
        "positions/XV-1 cd4 fg5 bc3 ef6.png",
        "positions/XV-10 cd4 fg5 dc3 gf6 gf4 de5.png",
        "positions/XV-11 cd4 fg5 dc3 gh4 cb4.png",
        "positions/XV-12 cd4 fg5 gf4 gf6 bc3 hg7.png",
        "positions/XV-13 cd4 fg5 gf4 gf6 bc3 gh4.png",
        "positions/XV-14 cd4 fg5 gh4 ba5.png",
        "positions/XV-15 cd4 fg5 gh4 dc5.png",
        "positions/XV-16 cd4 fg5 gh4 dc5 hf6 eg5.png",
        "positions/XV-17 cd4 fg5 gh4 ef6.png",
        "positions/XV-18 cd4 fg5 gh4 gf4.png",
        "positions/XV-19 cd4 hg5.png",
        "positions/XV-2 cd4 fg5 bc3 ef6 ab2.png",
        "positions/XV-20 cd4 hg5 bc3 gf4.png",
        "positions/XV-21 cd4 hg5 bc3 gh4.png",
        "positions/XV-22 cd4 hg5 bc3 gh4 cb4 de5.png",
        "positions/XV-23 cd4 hg5 gf4 gh4 fe5.png",
        "positions/XV-3 cd4 fg5 bc3 gf6 ab2 de5.png",
        "positions/XV-4 cd4 fg5 bc3 gf6 ab2 gh4.png",
        "positions/XV-5 cd4 fg5 bc3 gf4.png",
        "positions/XV-6 cd4 fg5 bc3 gh4 cb4 de5.png",
        "positions/XV-7 cd4 fg5 bc3 gh4 cb4 hg5.png",
        "positions/XV-8 cd4 fg5 dc5.png",
        "positions/XV-9 cd4 fg5 dc3 ef6 ed2 bc5.png",
        "positions/XVI-1 c3-g5 a7-a5.png",
        "positions/XVI-10 c3-h4 a7-g5.png",
        "positions/XVI-11 c3-h4 f6-a5.png",
        "positions/XVI-12 c3-h4 f6-e5.png",
        "positions/XVI-13 c3-h4 g7-c5.png",
        "positions/XVI-14 c3-h4 h6-c5.png",
        "positions/XVI-15 c3-h6 h6-a5.png",
        "positions/XVI-16 --- c7-a5.png",
        "positions/XVI-17 --- c7-g5.png",
        "positions/XVI-18 d2-a5 ---.png",
        "positions/XVI-19 d2-a5 b6-h4.png",
        "positions/XVI-2 c3-g5 a7-e5.png",
        "positions/XVI-20 d2-a5 e7-g5.png",
        "positions/XVI-21 d2-a5 g7-d2.png",
        "positions/XVI-22 d2-a5 g7-e5.png",
        "positions/XVI-23 d2-b4 ---.png",
        "positions/XVI-3 c3-g5 b6-c5.png",
        "positions/XVI-4 c3-g5 c7-c5.png",
        "positions/XVI-5 c3-g5 c7-e5.png",
        "positions/XVI-6 c3-g5 g7-c5.png",
        "positions/XVI-7 c3-g5 g7-e5.png",
        "positions/XVI-8 c3-g5 h8-a5.png",
        "positions/XVI-9 c3-h4 ---.png",
        "positions/XVII-1 cd4 fg5 gh4 gf4 hg5 dc5.png",
        "positions/XVII-10 ed4 ba5 ab6 gh4 de5 fe3.png",
        "positions/XVII-11 ed4 ba5 cb6 gh4 de5 fe3.png",
        "positions/XVII-12 ed4 ba5 fe3 fe5.png",
        "positions/XVII-13 ed4 ba5 gh4 gf2 fg5 fe3.png",
        "positions/XVII-14 ed4 ba5 gf2 hg5 gf4.png",
        "positions/XVII-15 ed4 ba5 gf4 fg5.png",
        "positions/XVII-16 ed4 bc5.png",
        "positions/XVII-17 ed4 bc5 db6 ac5 de3 hg5.png",
        "positions/XVII-18 ed4 bc5 db6 ac5 fe4 gf4.png",
        "positions/XVII-19 ed4 bc5 db6 ac5 de5 gh4.png",
        "positions/XVII-2 cd4 fg5 gh4 gf4 hg5 de5.png",
        "positions/XVII-20 ed4 bc5 ca5 db6.png",
        "positions/XVII-21 ed4 bc5 ab4 ab6 ca5.png",
        "positions/XVII-22 ed4 bc5 ab4 hg5 ca5.png",
        "positions/XVII-23 ed4 fd4 ce3 cb4 dc5 fg5.png",
        "positions/XVII-3 cd4 fg5 gh4 gf4 hg5 fe5.png",
        "positions/XVII-4 ed4.png",
        "positions/XVII-5 ed4 ba5.png",
        "positions/XVII-6 ed4 ba5 db4 ac5 dc5 fg5 ab6.png",
        "positions/XVII-7 ed4 ba5 ab6 fe3.png",
        "positions/XVII-8 ed4 ba5 ab4 dc5 db4 fe3.png",
        "positions/XVII-9 ed4 ba5 cb6 fe3.png",
        "positions/XVIII-1 d2-b4 a7-g5.png",
        "positions/XVIII-10 d2-c5 d6-h4.png",
        "positions/XVIII-11 d2-d4 ---.png",
        "positions/XVIII-12 d2-d4 a7-g5.png",
        "positions/XVIII-13 d2-d4 a7-h4.png",
        "positions/XVIII-14 d2-d4 b6-a5.png",
        "positions/XVIII-15 d2-d4 b6-g5.png",
        "positions/XVIII-16 d2-d4 c7-h4.png",
        "positions/XVIII-17 d2-d4 d6-h4.png",
        "positions/XVIII-18 d2-d4 f6-e5.png",
        "positions/XVIII-19 d2-d4 f6-g5.png",
        "positions/XVIII-2 d2-b4 a7-h4.png",
        "positions/XVIII-20 d2-d4 h8-h4.png",
        "positions/XVIII-21 d2-d4 h6-g5.png",
        "positions/XVIII-22 d2-e5 g7-h4.png",
        "positions/XVIII-23 d2-f4 ---.png",
        "positions/XVIII-3 d2-b4 d6-e5.png",
        "positions/XVIII-4 d2-b4 h8-a5.png",
        "positions/XVIII-5 d2-b4 h8-g5.png",
        "positions/XVIII-6 d2-b4 h8-h4.png",
        "positions/XVIII-7 d2-c5 ---.png",
        "positions/XVIII-8 d2-c5 a7-d2.png",
        "positions/XVIII-9 d2-c5 b6-g5.png",
        "positions/XX-1 d2-f4 b6-c5.png",
        "positions/XX-10 --- d6-a5.png",
        "positions/XX-11 --- d6-g5.png",
        "positions/XX-12 --- d6-h4.png",
        "positions/XX-13 e3-a5 ---.png",
        "positions/XX-14 e3-a5 a7-e5.png",
        "positions/XX-15 e3-a5 a7-g5.png",
        "positions/XX-16 e3-a5 b6-c5.png",
        "positions/XX-17 e3-a5 d6-e5.png",
        "positions/XX-18 e3-a5 e7-g5.png",
        "positions/XX-19 e3-a5 f6-b4.png",
        "positions/XX-2 d2-f4 d6-a5.png",
        "positions/XX-20 e3-a5 g7-b4.png",
        "positions/XX-21 e3-a5 h8-e5.png",
        "positions/XX-22 e3-a5 h8-h4.png",
        "positions/XX-23 e3-b4 ---.png",
        "positions/XX-3 d2-f4 e7-a5.png",
        "positions/XX-4 d2-g5 h6-h4.png",
        "positions/XX-5 d2-h4 b6-c5.png",
        "positions/XX-6 d2-h4 e7-c5.png",
        "positions/XX-7 d2-h4 f6-g5.png",
        "positions/XX-8 d2-h4 g7-e5.png",
        "positions/XX-9 d2-h4 h6-e5.png",
        "positions/XXI-1 ed4 fg5 fe3 gf6.png",
        "positions/XXI-10 ed4 hg5 fe3 gf4.png",
        "positions/XXI-11 ed4 hg5 gh4 gh6.png",
        "positions/XXI-12 ef4.png",
        "positions/XXI-13 ef4 ba5 de3 ab6 cd4 dc5.png",
        "positions/XXI-14 ef4 ba5 de3 cb6 cd2 fe5.png",
        "positions/XXI-15 ef4 ba5 fe3 ab6 gf2 fg5.png",
        "positions/XXI-16 ef4 ba5 fe3 fe5 cd4.png",
        "positions/XXI-17 ef4 ba5 gh4.png",
        "positions/XXI-18 ef4 bc5 cb4 fg5 de3.png",
        "positions/XXI-19 ef4 bc5 de3 ab6 cd4 fg5.png",
        "positions/XXI-2 ed4 fg5 gh4 ba5.png",
        "positions/XXI-20 ef4 bc5 fe3 cb6 cd4 fe5.png",
        "positions/XXI-21 ef4 bc5 gh4 ab6 hg3 fe5.png",
        "positions/XXI-22 ef4 dc5 cb4 ed6.png",
        "positions/XXI-23 ef4 dc5 cb4 ed6 gh4 de5.png",
        "positions/XXI-3 ed4 fg5 gh4 dc5.png",
        "positions/XXI-4 ed4 fg5 gh4 ef6.png",
        "positions/XXI-5 ed4 fg5 gh4 gf6.png",
        "positions/XXI-6 ed4 hg5.png",
        "positions/XXI-7 ed4 hg5 cb4 de5.png",
        "positions/XXI-8 ed4 hg5 cb4 gf4.png",
        "positions/XXI-9 ed4 hg5 cb4 gh4.png",
        "positions/XXII-1 e3-b4 a7-c5.png",
        "positions/XXII-10 e3-c5 d6-g5.png",
        "positions/XXII-11 e3-c5 g7-h4.png",
        "positions/XXII-12 e3-d4 ---.png",
        "positions/XXII-13 e3-d4 a7-e5.png",
        "positions/XXII-14 e3-d4 a7-g5.png",
        "positions/XXII-15 e3-d4 d6-a5.png",
        "positions/XXII-16 e3-d4 d6-h4.png",
        "positions/XXII-17 e3-f4 ---.png",
        "positions/XXII-18 e3-f4 a7-e5.png",
        "positions/XXII-19 e3-f4 d6-a5.png",
        "positions/XXII-2 e3-b4 a7-e5.png",
        "positions/XXII-20 e3-f4 f6-c5.png",
        "positions/XXII-21 e3-f4 g7-a5.png",
        "positions/XXII-22 e3-f6 f6-b4.png",
        "positions/XXII-23 e3-g5 h6-e5.png",
        "positions/XXII-3 e3-b4 a7-h4.png",
        "positions/XXII-4 e3-b4 b6-f4.png",
        "positions/XXII-5 e3-b4 b6-g5.png",
        "positions/XXII-6 e3-b4 f6-e5.png",
        "positions/XXII-7 e3-b4 h8-e5.png",
        "positions/XXII-8 e3-b4 h8-h4.png",
        "positions/XXII-9 e3-b6 b6-b4.png",
        "positions/XXIII-1 ef4 dc5 de3.png",
        "positions/XXIII-10 ef4 fg5.png",
        "positions/XXIII-11 ef4 fg5 cb4 ge3 fd4.png",
        "positions/XXIII-12 ef4 fg5 cb4 ge3 df4 ef6.png",
        "positions/XXIII-13 ef4 fg5 fe3 gh4 gf2 ba5.png",
        "positions/XXIII-14 ef4 fg5 fe3 gh4 gf2 de5.png",
        "positions/XXIII-15 gf4.png",
        "positions/XXIII-16 gf4 ba5.png",
        "positions/XXIII-17 gf4 ba5 cb4 ac3 bd4 fg5.png",
        "positions/XXIII-18 gf4 ba5 cb4 ac3 db4 de5.png",
        "positions/XXIII-19 gf4 ba5 cb4 ac3 db4 fg5.png",
        "positions/XXIII-2 ef4 dc5 fe3.png",
        "positions/XXIII-20 gf4 ba5 cd4 fe5 df6 eg5.png",
        "positions/XXIII-21 gf4 ba5 hg3 ab6 gh4 de5.png",
        "positions/XXIII-22 gf4 ba5 hg3 fg5.png",
        "positions/XXIII-23 gf4 bc5 hg3 ab6 gh4 ba5.png",
        "positions/XXIII-3 ef4 dc5 gh4 ed6 hg3 fe5.png",
        "positions/XXIII-4 ef4 de5.png",
        "positions/XXIII-5 ef4 de5 fd6 ec5 de3.png",
        "positions/XXIII-6 ef4 de5 fd6 ce5 de3 fg5.png",
        "positions/XXIII-7 ef4 fe5 cd4 ec3 bd4.png",
        "positions/XXIII-8 ef4 fe5 de3.png",
        "positions/XXIII-9 ef4 fe5 de3 ba5 ab4 cb6.png",
        "positions/XXIV-1 e3-h4 f6-a5.png",
        "positions/XXIV-10 f2-a5 e7-e5.png",
        "positions/XXIV-11 f2-a5 f6-e5.png",
        "positions/XXIV-12 f2-a5 g7-e5.png",
        "positions/XXIV-13 f2-b4 d6-a5.png",
        "positions/XXIV-14 f2-b4 d8-h4.png",
        "positions/XXIV-15 f2-b4 e7-e5.png",
        "positions/XXIV-16 f2-b4 g7-e5.png",
        "positions/XXIV-17 f2-b4 h8-c5.png",
        "positions/XXIV-18 f2-b4 h8-g5.png",
        "positions/XXIV-19 f2-c5 a7-f2.png",
        "positions/XXIV-2 e3-h4 g7-g5.png",
        "positions/XXIV-20 f2-c5 h8-e5.png",
        "positions/XXIV-21 f2-d4 b6-c5.png",
        "positions/XXIV-22 f2-d4 c7-g5.png",
        "positions/XXIV-23 f2-d4 d6-a5.png",
        "positions/XXIV-3 e3-h4 h6-a5.png",
        "positions/XXIV-4 e3-h4 h6-g5.png",
        "positions/XXIV-5 e3-h6 h6-a5.png",
        "positions/XXIV-6 e3-h6 h6-e5.png",
        "positions/XXIV-7 --- e7-h4.png",
        "positions/XXIV-8 f2-a5 d8-f4.png",
        "positions/XXIV-9 f2-a5 d6-e5.png",
        "positions/XXIX-1 gh4 de5.png",
        "positions/XXIX-10 gh4 fe5 ed4 bc5.png",
        "positions/XXIX-11 gh4 fe5 ed4 dc5.png",
        "positions/XXIX-12 gh4 fe5 ed4 ef6.png",
        "positions/XXIX-13 gh4 fe5 ed4 gf6.png",
        "positions/XXIX-14 gh4 fe5 ed4 gf6 fg3 dc5.png",
        "positions/XXIX-15 gh4 fe5 ef4 eg3 hf4 ba5.png",
        "positions/XXIX-16 gh4 fe5 fg3.png",
        "positions/XXIX-17 gh4 fe5 fg3 gf6.png",
        "positions/XXIX-18 gh4 fg5.png",
        "positions/XXIX-19 gh4 fg5 ge5 ab4 hf6 fg7.png",
        "positions/XXIX-2 gh4 de5 ab4 cd6.png",
        "positions/XXIX-20 gh4 fg5 ge5 ed4 hf6 fg7.png",
        "positions/XXIX-21 gh4 fg5 eg5 ed4 hf6.png",
        "positions/XXIX-22 gh4 hg5 cd4 dc5.png",
        "positions/XXIX-23 gh4 hg5 cd4 fg3 gh6.png",
        "positions/XXIX-3 gh4 de5 fg3.png",
        "positions/XXIX-4 gh4 de5 hg3 bc5.png",
        "positions/XXIX-5 gh4 de5 hg3 cd6.png",
        "positions/XXIX-6 gh4 fe5.png",
        "positions/XXIX-7 gh4 fe5 ab4 ed4.png",
        "positions/XXIX-8 gh4 fe5 cb4 ef4.png",
        "positions/XXIX-9 gh4 fe5 cd4 ec3 bd4 ba5.png",
        "positions/XXV-1 gf4 bc5 cd4 ed6 fe5 hg3.png",
        "positions/XXV-10 gf4 de5 ec5 fd6 hg3.png",
        "positions/XXV-11 gf4 fe5.png",
        "positions/XXV-12 gf4 fe5 ab4 eg3 fh4 gf6.png",
        "positions/XXV-13 gf4 fe5 cd4 ec3.png",
        "positions/XXV-14 gf4 fe5 cd4 eg3.png",
        "positions/XXV-15 gf4 fe5 ed4.png",
        "positions/XXV-16 gf4 fe5 ed4 hf4 eg3 ba5.png",
        "positions/XXV-17 gf4 fe5 fg3.png",
        "positions/XXV-18 gf4 fe5 fg3 ef6 ab4.png",
        "positions/XXV-19 gf4 fe5 hg3 bc5 cb4 ab6.png",
        "positions/XXV-2 gf4 dc5.png",
        "positions/XXV-20 gf4 fe5 hg3 ec5 ed4.png",
        "positions/XXV-21 gf4 fe5 hg3 cb4 gf6.png",
        "positions/XXV-22 gf4 fe5 hg3 ed4 gf6.png",
        "positions/XXV-23 gf4 fg5 cb4 de5.png",
        "positions/XXV-3 gf4 dc5 cb4 ba5.png",
        "positions/XXV-4 gf4 dc5 cb4 fg5.png",
        "positions/XXV-5 gf4 dc5 cd4 ed6.png",
        "positions/XXV-6 gf4 dc5 ed6 fe5 gh4 hg3.png",
        "positions/XXV-7 gf4 de5.png",
        "positions/XXV-8 gf4 de5 ce5 fd6 bc7 fg3.png",
        "positions/XXV-9 gf4 de5 ec5 fd6 ab4.png",
        "positions/XXVI-1 f2-d4 h6-g5.png",
        "positions/XXVI-10 f2-h4 f6-c5.png",
        "positions/XXVI-11 --- f6-a5.png",
        "positions/XXVI-12 --- f6-h4.png",
        "positions/XXVI-13 g1-a5 f6-b4.png",
        "positions/XXVI-14 g1-a5 g7-c5.png",
        "positions/XXVI-15 g1-b4 e7-c5.png",
        "positions/XXVI-16 g1-b4 h8-c5.png",
        "positions/XXVI-17 g1-d4 d6-g5.png",
        "positions/XXVI-18 g1-d4 h6-a5.png",
        "positions/XXVI-19 g1-g5 g7-a5.png",
        "positions/XXVI-2 f2-f4 d6-e5.png",
        "positions/XXVI-20 g1-g5 g7-e5.png",
        "positions/XXVI-21 g1-g5 h8-a5.png",
        "positions/XXVI-22 g1-h4 d6-c5.png",
        "positions/XXVI-23 g1-h4 e7-g5.png",
        "positions/XXVI-3 f2-f4 f6-e5.png",
        "positions/XXVI-4 f2-f4 h6-a5.png",
        "positions/XXVI-5 f2-f4 h8-e5.png",
        "positions/XXVI-6 f2-g5 g7-a5.png",
        "positions/XXVI-7 f2-g5 h6-a5.png",
        "positions/XXVI-8 f2-g5 h6-c5.png",
        "positions/XXVI-9 f2-h4 ---.png",
        "positions/XXVII-1 gf4 fg5 cb4 bc3 de5.png",
        "positions/XXVII-10 gh4 ba5 ab6 gh2 ba7 hg3.png",
        "positions/XXVII-11 gh4 bc5.png",
        "positions/XXVII-12 gh4 cd4 bc5 ab6.png",
        "positions/XXVII-13 gh4 fe5 cd4 bc5.png",
        "positions/XXVII-14 gh4 cb6 ed4 ce3 df4.png",
        "positions/XXVII-15 gh4 de5 ed4 ce3 fd4.png",
        "positions/XXVII-16 gh4 ab6 cd4 fg3 fg5.png",
        "positions/XXVII-17 gh4 dc5.png",
        "positions/XXVII-18 gh4 cd4 cb4 dc5.png",
        "positions/XXVII-19 gh4 fg5 cb4 dc5.png",
        "positions/XXVII-2 gh4.png",
        "positions/XXVII-20 gh4 cd6 ef4 dc5.png",
        "positions/XXVII-21 gh4 cd4 fe5 fg3 ed4.png",
        "positions/XXVII-22 gh4 ed4 fe5 fg3.png",
        "positions/XXVII-23 gh4 fe5 hg3 dc5.png",
        "positions/XXVII-3 gh4 ba5.png",
        "positions/XXVII-4 gh4 ba5 ab6 fg3 gf2 fg5.png",
        "positions/XXVII-5 gh4 ba5 de5 ed4 fg3.png",
        "positions/XXVII-6 gh4 ba5 fe5 ed4 fg3.png",
        "positions/XXVII-7 gh4 ba5 gf2 hg5 fg3.png",
        "positions/XXVII-8 gh4 ba5 ed4 fe5 hg3.png",
        "positions/XXVII-9 gh4 ba5 ef4 dc5 ab6 hg3.png",
        "positions/XXVIII-1 g3-a5 ---.png",
        "positions/XXVIII-10 g3-b4 h6-g5.png",
        "positions/XXVIII-11 g3-c5 b6-g5.png",
        "positions/XXVIII-12 g3-d4 a7-a5.png",
        "positions/XXVIII-13 g3-d4 a7-e5.png",
        "positions/XXVIII-14 g3-d4 a7-f4.png",
        "positions/XXVIII-15 g3-d4 b6-c5.png",
        "positions/XXVIII-16 g3-d4 d6-a5.png",
        "positions/XXVIII-17 g3-d4 d6-e5.png",
        "positions/XXVIII-18 g3-d4 g7-a5.png",
        "positions/XXVIII-19 g3-e5 g7-h4.png",
        "positions/XXVIII-2 g3-a5 a7-e5.png",
        "positions/XXVIII-20 g3-e5 h8-a5.png",
        "positions/XXVIII-21 g3-f4 ---.png",
        "positions/XXVIII-22 g3-f4 d6-g5.png",
        "positions/XXVIII-23 g3-f4 g7-a5.png",
        "positions/XXVIII-3 g3-a5 b6-e5.png",
        "positions/XXVIII-4 g3-a5 h6-g5.png",
        "positions/XXVIII-5 g3-b4 a7-e5.png",
        "positions/XXVIII-6 g3-b4 b6-e5.png",
        "positions/XXVIII-7 g3-b4 f8-f4.png",
        "positions/XXVIII-8 g3-b4 g7-g5.png",
        "positions/XXVIII-9 g3-b4 h8-h4.png",
        "positions/XXX-1 g3-f4 h8-g5.png",
        "positions/XXX-10 g3-h4 h8-e5.png",
        "positions/XXX-11 g3-h6 h6-a5.png",
        "positions/XXX-12 g3-h6 h6-e5.png",
        "positions/XXX-13 g3-h6 h6-h4.png",
        "positions/XXX-14 --- g7-a5.png",
        "positions/XXX-15 --- g7-e5.png",
        "positions/XXX-16 --- g7-g5.png",
        "positions/XXX-17 --- g7-h4.png",
        "positions/XXX-18 h2-a5 ---.png",
        "positions/XXX-19 h2-a5 a7-g5.png",
        "positions/XXX-2 g3-g5 a7-h4.png",
        "positions/XXX-20 h2-a5 a7-h2.png",
        "positions/XXX-21 h2-a5 b6-h2.png",
        "positions/XXX-22 h2-a5 d6-h2.png",
        "positions/XXX-23 h2-a5 e7-g5.png",
        "positions/XXX-3 g3-g5 h8-b4.png",
        "positions/XXX-4 g3-g5 h6-a5.png",
        "positions/XXX-5 g3-h4 ---.png",
        "positions/XXX-6 g3-h4 a7-g5.png",
        "positions/XXX-7 g3-h4 c7-f4.png",
        "positions/XXX-8 g3-h4 g7-a5.png",
        "positions/XXX-9 g3-h4 g7-c5.png",
        "positions/XXXI-1 gh4 hg5 ef4 ge3 df4 ba5.png",
        "positions/XXXI-10 h2-a7 a7-d4.png",
        "positions/XXXI-11 h2-b4 a7-e5.png",
        "positions/XXXI-12 h2-b4 a7-g5.png",
        "positions/XXXI-13 h2-b4 a7-h2.png",
        "positions/XXXI-14 h2-b4 b6-c5.png",
        "positions/XXXI-15 h2-b4 b6-h2.png",
        "positions/XXXI-16 h2-b4 d6-g5.png",
        "positions/XXXI-17 h2-b4 d6-h2.png",
        "positions/XXXI-18 h2-b4 g7-h2.png",
        "positions/XXXI-19 h2-b4 h8-h2.png",
        "positions/XXXI-2 gh4 hg5 ef4 ge3 df4 bc5.png",
        "positions/XXXI-20 h2-c5 a7-f4.png",
        "positions/XXXI-21 h2-c5 a7-h2.png",
        "positions/XXXI-22 h2-c5 b6-h2.png",
        "positions/XXXI-23 h2-c5 d6-h2.png",
        "positions/XXXI-3 gh4 hg5 hg3 de5.png",
        "positions/XXXI-4 gh4 hg5 hg3 gh6.png",
        "positions/XXXI-5 h2-a5 f6-h4.png",
        "positions/XXXI-6 h2-a5 g7-b4.png",
        "positions/XXXI-7 h2-a5 g7-h2.png",
        "positions/XXXI-8 h2-a5 h8-h2.png",
        "positions/XXXI-9 h2-a5 h8-h4.png",
        "positions/XXXII-1 h2-c5 f6-h2.png",
        "positions/XXXII-10 h2-e5 a7-d4.png",
        "positions/XXXII-11 h2-e5 e7-h2.png",
        "positions/XXXII-12 h2-e5 h8-h2.png",
        "positions/XXXII-13 h2-f4 ---.png",
        "positions/XXXII-14 h2-f4 a7-h2.png",
        "positions/XXXII-15 h2-f4 c7-h4.png",
        "positions/XXXII-16 h2-f4 c7-h2.png",
        "positions/XXXII-17 h2-f4 e7-h2.png",
        "positions/XXXII-18 h2-f4 f6-e5.png",
        "positions/XXXII-19 h2-f4 h6-c5.png",
        "positions/XXXII-2 h2-c5 h8-h2.png",
        "positions/XXXII-20 h2-g5 c7-a5.png",
        "positions/XXXII-21 h2-g5 c7-e5.png",
        "positions/XXXII-22 h2-g5 d6-h2.png",
        "positions/XXXII-23 h2-h4 ---.png",
        "positions/XXXII-3 h2-d4 a7-h2.png",
        "positions/XXXII-4 h2-d4 b6-c5.png",
        "positions/XXXII-5 h2-d4 b6-h2.png",
        "positions/XXXII-6 h2-d4 c7-h2.png",
        "positions/XXXII-7 h2-d4 d6-h2.png",
        "positions/XXXII-8 h2-d4 g7-h2.png",
        "positions/XXXII-9 h2-e5 a7-b4.png",
        "positions/XXXIII-1 h2-h4 h6-h2.png",
        "positions/XXXIII-2 h2-h4 a7-e5.png",
        "positions/XXXIII-3 h2-h4 a7-h2.png",
        "positions/XXXIII-4 h2-h4 d6-e5.png",
        "positions/XXXIII-5 h2-h4 d6-h2.png",
        "positions/XXXIII-6 h2-h6 h6-f4.png",
        "positions/XXXIII-7 h2-h6 h6-h4.png",
        "positions/XXXIII-8 --- h6-h4.png",
        "positions/XXXIII-9 --- h8-h4.png"
      // and so on...
      ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    const imageElement = document.getElementById("random-image");
    imageElement.src = randomImage;
    imageElement.alt = randomImage;
    const imageCaption = document.getElementById("image-caption");
    imageCaption.textContent = randomImage.split('/').pop().replace('.png', '');
    previousImages.unshift(randomImage);
    if (previousImages.length > 20) {
      previousImages.pop();
    }
    const historyElement = document.getElementById("history");
    const previousImageContainer = document.createElement("div");
    previousImageContainer.classList.add("previous-image-container");
    const previousImageElement = document.createElement("img");
    previousImageElement.classList.add("previous-image");
    previousImageElement.src = randomImage;
    previousImageElement.alt = randomImage;
    const previousCaptionElement = document.createElement("p");
    previousCaptionElement.textContent = randomImage.split('/').pop().replace('.png', '');
    previousImageContainer.appendChild(previousImageElement);
    previousImageContainer.appendChild(previousCaptionElement);
    historyElement.appendChild(previousImageContainer);
  }

  function rotateImage() {
    const imageElement = document.getElementById("random-image");
    imageElement.style.transform += "rotate(180deg)";
  }

  function toggleHistory() {
    const historyElement = document.getElementById("history");
    historyElement.style.display = historyElement.style.display === "none" ? "flex" : "none";
    var img = document.getElementById("history-img");
    var btn = document.getElementById("history-btn");

if (img.src.includes("hide.png")) {
img.src = "styling/show.png";
btn.title = "Rādīt vēsturi";
console.log(btn.title);
} else {
img.src = "styling/hide.png";
btn.title = "Paslēpt vēsturi";
console.log(btn.title);
}
  }

  function downloadCaptions() {
    let captions = "";
    for (let i = 0; i < previousImages.length; i++) {
      const caption = (i + 1) + ". " + previousImages[i].split('/').pop().replace('.png', '') + "\n";
      captions += caption;
    }
    const blob = new Blob([captions], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "captions.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  window.onload = getRandomImage;