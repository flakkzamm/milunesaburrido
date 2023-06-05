let Po = sprites.create(assets.image`fire`, SpriteKind.Player)
animation.runImageAnimation(
Po,
assets.animation`fair`,
200,
true
)
music.play(music.stringPlayable("C5 C E C D F A C5 ", 448), music.PlaybackMode.UntilDone)
music.play(music.createSong(hex`0096000408030300001c00010a006400f4016400000400000000000000000000000000050000046b000000040002242a08000c000320242a10001400031d242714001800011e18001c00012a1c00200001252000240002242a28002c0001203000340002242738003c0002202a40004400021d294400480002202448004c00012a4c00500002242a50005400011d54005800012701001c000f05001202c102c201000405002800000064002800031400060200041e0010001400012a20002400011d28002c00012a30003400011d38003c00012508001c000e050046006603320000040a002d00000064001400013200020100020e004c005000021d275400580002242a`), music.PlaybackMode.UntilDone)
