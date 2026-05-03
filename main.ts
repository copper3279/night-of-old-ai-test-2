enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
    export const Fireball = SpriteKind.create()
    export const display = SpriteKind.create()
    export const Slope = SpriteKind.create()
    export const MovingPlatform = SpriteKind.create()
    export const slopetwo = SpriteKind.create()
    export const slopeone = SpriteKind.create()
    export const hitbox = SpriteKind.create()
    export const partical = SpriteKind.create()
    export const bullet = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (isLanding) {
        characterAnimations.loopFrames(
        animSprite,
        [img`
            . . . . f f . f f . . . . 
            . . . . f 3 f f 3 f f . . 
            . . . . f b b b b b b f . 
            . . . . f b b b 1 b 1 f . 
            . . . . f b b b b b b f . 
            . . . . f f f f f f f . . 
            . . . . f b b b b b f . . 
            . f . . f f b b b b f f . 
            f . . f b b f b b b f b f 
            . f f f f f f f f f f f . 
            . . . . f b b f b b f . . 
            . . . . f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f . f f . . . . 
            . . . . f 3 f f 3 f f . . 
            . . . . f b b b b b b f . 
            . . . . f b b b 1 b 1 f . 
            . . . . f b b b b b b f . 
            . . . . f f f f f f f . . 
            . f . . f b b b b b f f . 
            f . . f b b f b b b f b f 
            . f f f f f f f f f f f . 
            . . . . f b b f b b f . . 
            . . . . f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . f f . f f . . . . 
            . . . . f 3 f f 3 f f . . 
            . . . . f b b b b b b f . 
            . . . . f b b b 1 b 1 f . 
            . . . . f f f f f f f . . 
            . f . . f b b b b b f f . 
            f . . f b b f b b b f b f 
            . f f f f f f f f f f f . 
            . . . . f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . f f . f f . . . . 
            . . . . f 3 f f 3 f f . . 
            . . . . f b b b b b b f . 
            . . . . f b b b 1 b 1 f . 
            . . . . f b b b b b b f . 
            . f . . f f f f f f f . . 
            f . . . f b b b b b f f . 
            . f f f b b f b b b f b f 
            . . . . f b b f b b f . . 
            . . . . f f f f f f f . . 
            `],
        50,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        animSprite,
        [img`
            . . . . f f . f f . . . . 
            . . f f 3 f f 3 f . . . . 
            . f b b b b b b f . . . . 
            . f 1 b 1 b b b f . . . . 
            . f b b b b b b f . . . . 
            . . f f f f f f f . . . . 
            . . f b b b b b f . . . . 
            . f f b b b b f f . . f . 
            f b f b b b f b b f . . f 
            . f f f f f f f f f f f . 
            . . f b b f b b f . . . . 
            . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f . f f . . . . 
            . . f f 3 f f 3 f . . . . 
            . f b b b b b b f . . . . 
            . f 1 b 1 b b b f . . . . 
            . f b b b b b b f . . . . 
            . . f f f f f f f . . . . 
            . f f b b b b b f . . f . 
            f b f b b b f b b f . . f 
            . f f f f f f f f f f f . 
            . . f b b f b b f . . . . 
            . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . f f . f f . . . . 
            . . f f 3 f f 3 f . . . . 
            . f b b b b b b f . . . . 
            . f 1 b 1 b b b f . . . . 
            . . f f f f f f f . . . . 
            . f f b b b b b f . . f . 
            f b f b b b f b b f . . f 
            . f f f f f f f f f f f . 
            . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . f f . f f . . . . 
            . . f f 3 f f 3 f . . . . 
            . f b b b b b b f . . . . 
            . f 1 b 1 b b b f . . . . 
            . f b b b b b b f . . . . 
            . . f f f f f f f . . f . 
            . f f b b b b b f . . . f 
            f b f b b b f b b f f f . 
            . . f b b f b b f . . . . 
            . . f f f f f f f . . . . 
            `],
        50,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        animSprite,
        [img`
            . . . . f f . f f . . . . 
            . . . . f 3 f f 3 f f . . 
            . . . . f b b b b b b f . 
            . . . . f b b b 1 b 1 f . 
            . . . . f b b b b b b f . 
            . . . . f f f f f f f . . 
            . . . . f b b b b b f . . 
            . f . . f f b b b b f f . 
            f . . f b b f b b b f b f 
            . f f f f f f f f f f f . 
            . . . . f b b f b b f . . 
            . . . . f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f . f f . . . . 
            . . . . f 3 f f 3 f f . . 
            . . . . f b b b b b b f . 
            . . . . f b b b 1 b 1 f . 
            . . . . f b b b b b b f . 
            . . . . f f f f f f f . . 
            . f . . f b b b b b f f . 
            f . . f b b f b b b f b f 
            . f f f f f f f f f f f . 
            . . . . f b b f b b f . . 
            . . . . f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . f f . f f . . . . 
            . . . . f 3 f f 3 f f . . 
            . . . . f b b b b b b f . 
            . . . . f b b b 1 b 1 f . 
            . . . . f f f f f f f . . 
            . f . . f b b b b b f f . 
            f . . f b b f b b b f b f 
            . f f f f f f f f f f f . 
            . . . . f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . f f . f f . . . . 
            . . . . f 3 f f 3 f f . . 
            . . . . f b b b b b b f . 
            . . . . f b b b 1 b 1 f . 
            . . . . f b b b b b b f . 
            . f . . f f f f f f f . . 
            f . . . f b b b b b f f . 
            . f f f b b f b b b f b f 
            . . . . f b b f b b f . . 
            . . . . f f f f f f f . . 
            `],
        50,
        characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        animSprite,
        [img`
            . . . . f f . f f . . . . 
            . . f f 3 f f 3 f . . . . 
            . f b b b b b b f . . . . 
            . f 1 b 1 b b b f . . . . 
            . f b b b b b b f . . . . 
            . . f f f f f f f . . . . 
            . . f b b b b b f . . . . 
            . f f b b b b f f . . f . 
            f b f b b b f b b f . . f 
            . f f f f f f f f f f f . 
            . . f b b f b b f . . . . 
            . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f . f f . . . . 
            . . f f 3 f f 3 f . . . . 
            . f b b b b b b f . . . . 
            . f 1 b 1 b b b f . . . . 
            . f b b b b b b f . . . . 
            . . f f f f f f f . . . . 
            . f f b b b b b f . . f . 
            f b f b b b f b b f . . f 
            . f f f f f f f f f f f . 
            . . f b b f b b f . . . . 
            . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . f f . f f . . . . 
            . . f f 3 f f 3 f . . . . 
            . f b b b b b b f . . . . 
            . f 1 b 1 b b b f . . . . 
            . . f f f f f f f . . . . 
            . f f b b b b b f . . f . 
            f b f b b b f b b f . . f 
            . f f f f f f f f f f f . 
            . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . f f . f f . . . . 
            . . f f 3 f f 3 f . . . . 
            . f b b b b b b f . . . . 
            . f 1 b 1 b b b f . . . . 
            . f b b b b b b f . . . . 
            . . f f f f f f f . . f . 
            . f f b b b b b f . . . f 
            f b f b b b f b b f f f . 
            . . f b b f b b f . . . . 
            . . f f f f f f f . . . . 
            `],
        50,
        characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
        )
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Twinkle), mySprite4.x, mySprite4.y, 10, 10, 1)
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), mySprite4.x, mySprite4.y, 10, 10, 1)
    }
})
events.wallEvent(SpriteKind.Player, events.simpleWallCondition(events.WallFlag.Top), events.WallEvent.StartHitting, function (sprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 1132, 63, 255, 0, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    isHittingHead = true
    timer.after(150, function () {
        isHittingHead = false
    })
})
function playeranims2 () {
	
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        music.play(music.createSoundEffect(WaveShape.Square, 212, 894, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        isJumping = true
        timer.after(60, function () {
            isJumping = false
        })
    }
    if (mySprite.isHittingTile(CollisionDirection.Left)) {
        music.play(music.createSoundEffect(WaveShape.Noise, 479, 538, 255, 0, 50, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Square, 212, 894, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        cantmove = true
        mySprite.vx = 200
        mySprite.vy = -200
        timer.after(250, function () {
            cantmove = false
        })
    }
    if (mySprite.isHittingTile(CollisionDirection.Right)) {
        music.play(music.createSoundEffect(WaveShape.Noise, 479, 538, 255, 0, 50, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Square, 212, 894, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        cantmove = true
        mySprite.vx = -200
        mySprite.vy = -200
        timer.after(250, function () {
            cantmove = false
        })
    }
})
events.wallEvent(SpriteKind.Player, events.simpleWallCondition(events.WallFlag.Bottom), events.WallEvent.StartHitting, function (sprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 1132, 63, 255, 0, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    isLanding = true
    timer.after(250, function () {
        isLanding = false
    })
})
info.onScore(100, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    isJumping = false
})
spriteutils.createRenderable(-1, function (screen2) {
    if (seline) {
        screen2.drawLine(mySprite6.x, mySprite6.y, mySprite5.x, mySprite5.y, 2)
    }
})
function playeranims () {
    characterAnimations.loopFrames(
    animSprite,
    [img`
        . . . . . . . . . . . . . 
        . . . . f f . f f . . . . 
        . . . . f 3 f f 3 f f . . 
        . . . . f b b b b b b f . 
        . . . . f b b b 1 b 1 f . 
        . . . . f b b b b b b f . 
        . . . . f f f f f f f . . 
        . f . . f f b b b b f f . 
        f . . f b b f b b b f b f 
        . f f f f f f f f f f f . 
        . . . . f f b f b b f . . 
        . . . . f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f . f f . . . . 
        . . . . f 3 f f 3 f f . . 
        . . . . f b b b b b b f . 
        . . . . f b b b 1 b 1 f . 
        . . . . f b b b b b b f . 
        . . . . f f f f f f f . . 
        . f . . f f b b b b f f . 
        f . . f b b f b b b f b f 
        . f f f f f f f f f f f . 
        . . . . f f b f b b f . . 
        . . . . f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f . f f . . . . 
        . . . . f 3 f f 3 f f . . 
        . . . . f b b b b b b f . 
        . . . . f b b b 1 b 1 f . 
        . . . . f b b b b b b f . 
        . . . . f f f f f f f . . 
        . f . . f b b b b b f . . 
        f . . . f f b b b b f f . 
        . f f f b b f f f f f b f 
        . . . . f f b f b b f f . 
        . . . . f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f . f f . . . . 
        . . . . f 3 f f 3 f f . . 
        . . . . f b b b b b b f . 
        . . . . f b b b 1 b 1 f . 
        . . . . f b b b b b b f . 
        . . . . f f f f f f f . . 
        . f . . f b b b b b f . . 
        f . . . f f b b b b f f . 
        . f f f b b f f f f f b f 
        . . . . f f b f b b f f . 
        . . . . f f f f f f f . . 
        `,img`
        . . . . f f . f f . . . . 
        . . . . f 3 f f 3 f f . . 
        . . . . f b b b b b b f . 
        . . . . f b b b 1 b 1 f . 
        . . . . f b b b b b b f . 
        . . . . f f f f f f f . . 
        . . . . f b b b b b f . . 
        . f . . f b b b b b f . . 
        f . . . f f b b b b f f . 
        . f f f b b f f f f f b f 
        . . . . f f b f b b f f . 
        . . . . f f f f f f f . . 
        `,img`
        . . . . f f . f f . . . . 
        . . . . f 3 f f 3 f f . . 
        . . . . f b b b b b b f . 
        . . . . f b b b 1 b 1 f . 
        . . . . f b b b b b b f . 
        . . . . f f f f f f f . . 
        . . . . f b b b b b f . . 
        . f . . f b b b b b f . . 
        f . . . f f b b b b f f . 
        . f f f b b f f f f f b f 
        . . . . f f b f b b f f . 
        . . . . f f f f f f f . . 
        `,img`
        . . . . f f . f f . . . . 
        . . . . f 3 f f 3 f f . . 
        . . . . f b b b b b b f . 
        . . . . f b b b 1 b 1 f . 
        . . . . f b b b b b b f . 
        . . . . f f f f f f f . . 
        . . . . f b b b b b f . . 
        . f . . f f b b b b f f . 
        f . . f b b f b b b f b f 
        . f f f f f f f f f f f . 
        . . . . f b b f b b f . . 
        . . . . f f f f f f f . . 
        `,img`
        . . . . f f . f f . . . . 
        . . . . f 3 f f 3 f f . . 
        . . . . f b b b b b b f . 
        . . . . f b b b 1 b 1 f . 
        . . . . f b b b b b b f . 
        . . . . f f f f f f f . . 
        . . . . f b b b b b f . . 
        . f . . f f b b b b f f . 
        f . . f b b f b b b f b f 
        . f f f f f f f f f f f . 
        . . . . f b b f b b f . . 
        . . . . f f f f f f f . . 
        `],
    150,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    animSprite,
    [img`
        . . . . . . . . . . . . . 
        . . . . f f . f f . . . . 
        . . f f 3 f f 3 f . . . . 
        . f b b b b b b f . . . . 
        . f 1 b 1 b b b f . . . . 
        . f b b b b b b f . . . . 
        . . f f f f f f f . . . . 
        . f f b b b b f f . . f . 
        f b f b b b f b b f . . f 
        . f f f f f f f f f f f . 
        . . f b b f b f f . . . . 
        . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f . f f . . . . 
        . . f f 3 f f 3 f . . . . 
        . f b b b b b b f . . . . 
        . f 1 b 1 b b b f . . . . 
        . f b b b b b b f . . . . 
        . . f f f f f f f . . . . 
        . f f b b b b f f . . f . 
        f b f b b b f b b f . . f 
        . f f f f f f f f f f f . 
        . . f b b f b f f . . . . 
        . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f . f f . . . . 
        . . f f 3 f f 3 f . . . . 
        . f b b b b b b f . . . . 
        . f 1 b 1 b b b f . . . . 
        . f b b b b b b f . . . . 
        . . f f f f f f f . . . . 
        . . f b b b b b f . . f . 
        . f f b b b b f f . . . f 
        f b f f f f f b b f f f . 
        . f f b b f b f f . . . . 
        . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f . f f . . . . 
        . . f f 3 f f 3 f . . . . 
        . f b b b b b b f . . . . 
        . f 1 b 1 b b b f . . . . 
        . f b b b b b b f . . . . 
        . . f f f f f f f . . . . 
        . . f b b b b b f . . f . 
        . f f b b b b f f . . . f 
        f b f f f f f b b f f f . 
        . f f b b f b f f . . . . 
        . . f f f f f f f . . . . 
        `,img`
        . . . . f f . f f . . . . 
        . . f f 3 f f 3 f . . . . 
        . f b b b b b b f . . . . 
        . f 1 b 1 b b b f . . . . 
        . f b b b b b b f . . . . 
        . . f f f f f f f . . . . 
        . . f b b b b b f . . . . 
        . . f b b b b b f . . f . 
        . f f b b b b f f . . . f 
        f b f f f f f b b f f f . 
        . f f b b f b f f . . . . 
        . . f f f f f f f . . . . 
        `,img`
        . . . . f f . f f . . . . 
        . . f f 3 f f 3 f . . . . 
        . f b b b b b b f . . . . 
        . f 1 b 1 b b b f . . . . 
        . f b b b b b b f . . . . 
        . . f f f f f f f . . . . 
        . . f b b b b b f . . . . 
        . . f b b b b b f . . f . 
        . f f b b b b f f . . . f 
        f b f f f f f b b f f f . 
        . f f b b f b f f . . . . 
        . . f f f f f f f . . . . 
        `,img`
        . . . . f f . f f . . . . 
        . . f f 3 f f 3 f . . . . 
        . f b b b b b b f . . . . 
        . f 1 b 1 b b b f . . . . 
        . f b b b b b b f . . . . 
        . . f f f f f f f . . . . 
        . . f b b b b b f . . . . 
        . f f b b b b f f . . f . 
        f b f b b b f b b f . . f 
        . f f f f f f f f f f f . 
        . . f b b f b b f . . . . 
        . . f f f f f f f . . . . 
        `,img`
        . . . . f f . f f . . . . 
        . . f f 3 f f 3 f . . . . 
        . f b b b b b b f . . . . 
        . f 1 b 1 b b b f . . . . 
        . f b b b b b b f . . . . 
        . . f f f f f f f . . . . 
        . . f b b b b b f . . . . 
        . f f b b b b f f . . f . 
        f b f b b b f b b f . . f 
        . f f f f f f f f f f f . 
        . . f b b f b b f . . . . 
        . . f f f f f f f . . . . 
        `],
    150,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    animSprite,
    [img`
        . . . . f f . f f . . . . 
        . . f f 3 f f 3 f . . . . 
        . f b b b b b b f . . . . 
        . f 1 b 1 b b b f . . . . 
        . f b b b b b b f . . . . 
        . . f f f f f f f . . . . 
        . . f b b b b b f . . . . 
        . f f b b f f b f . . f . 
        f b f b f b b f f . . . f 
        . f f f f f f f f f f f . 
        . f b b f . f b b f . . . 
        . f f f f . f f f f . . . 
        `,img`
        . . . . f f . f f . . . . 
        . . f f 3 f f 3 f . . . . 
        . f b b b b b b f . . . . 
        . f 1 b 1 b b b f . . . . 
        . f b b b b b b f . . . . 
        . . f f f f f f f . . . . 
        . . f b b b b b f . . . . 
        . . f b f f b b f . . f . 
        . f f f b b f b f . . . f 
        . . f f f f f f f f f f . 
        . . f b b f b b f . . . . 
        . . f f f f f f f . . . . 
        `,img`
        . . . . f f . f f . . . . 
        . . f f 3 f f 3 f . . . . 
        . f b b b b b b f . . . . 
        . f 1 b 1 b b b f . . . . 
        . f b b b b b b f . . . . 
        . . f f f f f f f . . . . 
        . . f b b b b b f . . . . 
        . . f b b f f b f . . f . 
        . . f b f b b f f . . . f 
        . . f f f f f f f f f f . 
        . . . f b b b f . . . . . 
        . . . f f f f f . . . . . 
        `,img`
        . . . . f f . f f . . . . 
        . . f f 3 f f 3 f . . . . 
        . f b b b b b b f . . . . 
        . f 1 b 1 b b b f . . . . 
        . f b b b b b b f . . . . 
        . . f f f f f f f . . . . 
        . . f b b b b b f . . . . 
        . . f b b b b f f . . f . 
        . f f b b b f b b f . . f 
        . . f f f f f f f f f f . 
        . . f b b f b b f . . . . 
        . . f f f f f f f . . . . 
        `],
    150,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    animSprite,
    [img`
        . . . . f f . f f . . . . 
        . . . . f 3 f f 3 f f . . 
        . . . . f b b b b b b f . 
        . . . . f b b b 1 b 1 f . 
        . . . . f b b b b b b f . 
        . . . . f f f f f f f . . 
        . . . . f b b b b b f . . 
        . f . . f b f f b b f f . 
        f . . . f f b b f b f b f 
        . f f f f f f f f f f f . 
        . . . f b b f . f b b f . 
        . . . f f f f . f f f f . 
        `,img`
        . . . . f f . f f . . . . 
        . . . . f 3 f f 3 f f . . 
        . . . . f b b b b b b f . 
        . . . . f b b b 1 b 1 f . 
        . . . . f b b b b b b f . 
        . . . . f f f f f f f . . 
        . . . . f b b b b b f . . 
        . f . . f b b f f b f . . 
        f . . . f b f b b f f f . 
        . f f f f f f f f f f . . 
        . . . . f b b f b b f . . 
        . . . . f f f f f f f . . 
        `,img`
        . . . . f f . f f . . . . 
        . . . . f 3 f f 3 f f . . 
        . . . . f b b b b b b f . 
        . . . . f b b b 1 b 1 f . 
        . . . . f b b b b b b f . 
        . . . . f f f f f f f . . 
        . . . . f b b b b b f . . 
        . f . . f b f f b b f . . 
        f . . . f f b b f b f . . 
        . f f f f f f f f f f . . 
        . . . . . f b b b f . . . 
        . . . . . f f f f f . . . 
        `,img`
        . . . . f f . f f . . . . 
        . . . . f 3 f f 3 f f . . 
        . . . . f b b b b b b f . 
        . . . . f b b b 1 b 1 f . 
        . . . . f b b b b b b f . 
        . . . . f f f f f f f . . 
        . . . . f b b b b b f . . 
        . f . . f f b b b b f . . 
        f . . f b b f b b b f f . 
        . f f f f f f f f f f . . 
        . . . . f b b f b b f . . 
        . . . . f f f f f f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    animSprite,
    [img`
        . . . . f f . f f . . . . 
        . . f f 3 f f 3 f . . . . 
        . f b b b b b b f . . . . 
        . f 1 b 1 b b b f . . . . 
        . f b b b b b b f . . . . 
        . . f f f f f f f . . . . 
        . . f b b b b b f . . . . 
        . f f b b f f b f . . f . 
        f b f b f b b f f . . . f 
        . f f f f f f f f f f f . 
        . f b b f . f b b f . . . 
        . f f f f . f f f f . . . 
        `,img`
        . . . . f f . f f . . . . 
        . . f f 3 f f 3 f . . . . 
        . f b b b b b b f . . . . 
        . f 1 b 1 b b b f . . . . 
        . f b b b b b b f . . . . 
        . . f f f f f f f . . . . 
        . . f b b b b b f . . . . 
        . . f b f f b b f . . f . 
        . f f f b b f b f . . . f 
        . . f f f f f f f f f f . 
        . . f b b f b b f . . . . 
        . . f f f f f f f . . . . 
        `,img`
        . . . . f f . f f . . . . 
        . . f f 3 f f 3 f . . . . 
        . f b b b b b b f . . . . 
        . f 1 b 1 b b b f . . . . 
        . f b b b b b b f . . . . 
        . . f f f f f f f . . . . 
        . . f b b b b b f . . . . 
        . . f b b f f b f . . f . 
        . . f b f b b f f . . . f 
        . . f f f f f f f f f f . 
        . . . f b b b f . . . . . 
        . . . f f f f f . . . . . 
        `,img`
        . . . . f f . f f . . . . 
        . . f f 3 f f 3 f . . . . 
        . f b b b b b b f . . . . 
        . f 1 b 1 b b b f . . . . 
        . f b b b b b b f . . . . 
        . . f f f f f f f . . . . 
        . . f b b b b b f . . . . 
        . . f b b b b f f . . f . 
        . f f b b b f b b f . . f 
        . . f f f f f f f f f f . 
        . . f b b f b b f . . . . 
        . . f f f f f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    animSprite,
    [img`
        . . . . 1 . . . . . 1 . . 
        . . 1 1 . . . f b . . 1 . 
        . 1 . . b . f b f f . . 1 
        1 . f b . . f b f b . . 1 
        . b f f b f b f b . b . 1 
        . f b b f f b f f . . . . 
        . . f f b b 3 b b f f . . 
        . . . . f f b f f b b f . 
        . . b . b f b f b f f b . 
        1 . . b f b f . . b f . 1 
        . 1 . f f b f . b . . 1 . 
        . . . . b f . . . . 1 . . 
        `,img`
        . . 1 . . . . . 1 1 1 . . 
        . 1 . . b f . . . . . 1 . 
        . 1 . f f b f . b . . . . 
        . 1 . b f b f . . b f . . 
        . . b . b f b f b f f b . 
        . . . . f f b f f b b f . 
        . . f f b b 3 b b f f . . 
        . f b b f f b f f . . . . 
        . b f f b f b f b . b . 1 
        . . f b . . f b f b . 1 . 
        . 1 . . b . f b f f . 1 . 
        . . 1 . . . . f b . 1 . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . 1 . . . f b . 1 . . 
        . 1 1 . b . f b f f . 1 . 
        1 . f b . . f b f b . . 1 
        . b f f b f b f b . b . 1 
        . f b b f f b f f . . . . 
        . . f f b b 3 b b f f . . 
        . . . . f f b f f b b f . 
        . . b . b f b f b f f b . 
        . . . b f b f . . b f . . 
        1 . . f f b f . b 1 . . . 
        . 1 1 . b f . . . . 1 1 1 
        `,img`
        . . . . . . . . . . . . . 
        . . 1 . b f . . . 1 1 1 . 
        . 1 . f f b f . b . . . 1 
        1 . . b f b f . . b f . . 
        . . b . b f b f b f f b . 
        . . . . f f b f f b b f . 
        . . f f b b 3 b b f f . . 
        . f b b f f b f f . . . . 
        . b f f b f b f b . b . . 
        . . f b . . f b f b . . . 
        . . . . b . f b f f . . 1 
        . 1 . . . . . f b . . . 1 
        `],
    150,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    animSprite,
    [img`
        . . . . 1 . . . . . 1 . . 
        . . 1 1 . . . f b . . 1 . 
        . 1 . . b . f b f f . . 1 
        1 . f b . . f b f b . . 1 
        . b f f b f b f b . b . 1 
        . f b b f f b f f . . . . 
        . . f f b b 3 b b f f . . 
        . . . . f f b f f b b f . 
        . . b . b f b f b f f b . 
        1 . . b f b f . . b f . 1 
        . 1 . f f b f . b . . 1 . 
        . . . . b f . . . . 1 . . 
        `,img`
        . . 1 . . . . . 1 1 1 . . 
        . 1 . . b f . . . . . 1 . 
        . 1 . f f b f . b . . . . 
        . 1 . b f b f . . b f . . 
        . . b . b f b f b f f b . 
        . . . . f f b f f b b f . 
        . . f f b b 3 b b f f . . 
        . f b b f f b f f . . . . 
        . b f f b f b f b . b . 1 
        . . f b . . f b f b . 1 . 
        . 1 . . b . f b f f . 1 . 
        . . 1 . . . . f b . 1 . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . 1 . . . f b . 1 . . 
        . 1 1 . b . f b f f . 1 . 
        1 . f b . . f b f b . . 1 
        . b f f b f b f b . b . 1 
        . f b b f f b f f . . . . 
        . . f f b b 3 b b f f . . 
        . . . . f f b f f b b f . 
        . . b . b f b f b f f b . 
        . . . b f b f . . b f . . 
        1 . . f f b f . b 1 . . . 
        . 1 1 . b f . . . . 1 1 1 
        `,img`
        . . . . . . . . . . . . . 
        . . 1 . b f . . . 1 1 1 . 
        . 1 . f f b f . b . . . 1 
        1 . . b f b f . . b f . . 
        . . b . b f b f b f f b . 
        . . . . f f b f f b b f . 
        . . f f b b 3 b b f f . . 
        . f b b f f b f f . . . . 
        . b f f b f b f b . b . . 
        . . f b . . f b f b . . . 
        . . . . b . f b f f . . 1 
        . 1 . . . . . f b . . . 1 
        `],
    150,
    characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    animSprite,
    [img`
        . . . . 1 . . . . . 1 . . 
        . . 1 1 . . . f b . . 1 . 
        . 1 . . b . f b f f . . 1 
        1 . f b . . f b f b . . 1 
        . b f f b f b f b . b . 1 
        . f b b f f b f f . . . . 
        . . f f b b 3 b b f f . . 
        . . . . f f b f f b b f . 
        . . b . b f b f b f f b . 
        1 . . b f b f . . b f . 1 
        . 1 . f f b f . b . . 1 . 
        . . . . b f . . . . 1 . . 
        `,img`
        . . 1 . . . . . 1 1 1 . . 
        . 1 . . b f . . . . . 1 . 
        . 1 . f f b f . b . . . . 
        . 1 . b f b f . . b f . . 
        . . b . b f b f b f f b . 
        . . . . f f b f f b b f . 
        . . f f b b 3 b b f f . . 
        . f b b f f b f f . . . . 
        . b f f b f b f b . b . 1 
        . . f b . . f b f b . 1 . 
        . 1 . . b . f b f f . 1 . 
        . . 1 . . . . f b . 1 . . 
        `,img`
        . . . 1 . . . f b . 1 . . 
        . 1 1 . b . f b f f . 1 . 
        1 . f b . . f b f b . . 1 
        . b f f b f b f b . b . 1 
        . f b b f f b f f . . . . 
        . . f f b b 3 b b f f . . 
        . . . . f f b f f b b f . 
        . . b . b f b f b f f b . 
        . . . b f b f . . b f . . 
        1 . . f f b f . b 1 . . . 
        . 1 1 . b f . . . . 1 1 1 
        . . . . . . . . . . . . . 
        `,img`
        . . 1 . b f . . . 1 1 1 . 
        . 1 . f f b f . b . . . 1 
        1 . . b f b f . . b f . . 
        . . b . b f b f b f f b . 
        . . . . f f b f f b b f . 
        . . f f b b 3 b b f f . . 
        . f b b f f b f f . . . . 
        . b f f b f b f b . b . . 
        . . f b . . f b f b . . . 
        . . . . b . f b f f . . 1 
        . 1 . . . . . f b . . . 1 
        . . 1 . . . . . . . . 1 1 
        `],
    150,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    animSprite,
    [img`
        . . . . 1 . . . . . 1 . . 
        . . 1 1 . . . f b . . 1 . 
        . 1 . . b . f b f f . . 1 
        1 . f b . . f b f b . . 1 
        . b f f b f b f b . b . 1 
        . f b b f f b f f . . . . 
        . . f f b b 3 b b f f . . 
        . . . . f f b f f b b f . 
        . . b . b f b f b f f b . 
        1 . . b f b f . . b f . 1 
        . 1 . f f b f . b . . 1 . 
        . . . . b f . . . . 1 . . 
        `,img`
        . . 1 . . . . . 1 1 1 . . 
        . 1 . . b f . . . . . 1 . 
        . 1 . f f b f . b . . . . 
        . 1 . b f b f . . b f . . 
        . . b . b f b f b f f b . 
        . . . . f f b f f b b f . 
        . . f f b b 3 b b f f . . 
        . f b b f f b f f . . . . 
        . b f f b f b f b . b . 1 
        . . f b . . f b f b . 1 . 
        . 1 . . b . f b f f . 1 . 
        . . 1 . . . . f b . 1 . . 
        `,img`
        . . . 1 . . . f b . 1 . . 
        . 1 1 . b . f b f f . 1 . 
        1 . f b . . f b f b . . 1 
        . b f f b f b f b . b . 1 
        . f b b f f b f f . . . . 
        . . f f b b 3 b b f f . . 
        . . . . f f b f f b b f . 
        . . b . b f b f b f f b . 
        . . . b f b f . . b f . . 
        1 . . f f b f . b 1 . . . 
        . 1 1 . b f . . . . 1 1 1 
        . . . . . . . . . . . . . 
        `,img`
        . . 1 . b f . . . 1 1 1 . 
        . 1 . f f b f . b . . . 1 
        1 . . b f b f . . b f . . 
        . . b . b f b f b f f b . 
        . . . . f f b f f b b f . 
        . . f f b b 3 b b f f . . 
        . f b b f f b f f . . . . 
        . b f f b f b f b . b . . 
        . . f b . . f b f b . . . 
        . . . . b . f b f f . . 1 
        . 1 . . . . . f b . . . 1 
        . . 1 . . . . . . . . 1 1 
        `],
    150,
    characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    animSprite,
    [img`
        . . . . 1 . . . . . 1 . . 
        . . 1 1 . . . f b . . 1 . 
        . 1 . . b . f b f f . . 1 
        1 . f b . . f b f b . . 1 
        . b f f b f b f b . b . 1 
        . f b b f f b f f . . . . 
        . . f f b b 3 b b f f . . 
        . . . . f f b f f b b f . 
        . . b . b f b f b f f b . 
        1 . . b f b f . . b f . 1 
        . 1 . f f b f . b . . 1 . 
        . . . . b f . . . . 1 . . 
        `,img`
        . . 1 . . . . . 1 1 1 . . 
        . 1 . . b f . . . . . 1 . 
        . 1 . f f b f . b . . . . 
        . 1 . b f b f . . b f . . 
        . . b . b f b f b f f b . 
        . . . . f f b f f b b f . 
        . . f f b b 3 b b f f . . 
        . f b b f f b f f . . . . 
        . b f f b f b f b . b . 1 
        . . f b . . f b f b . 1 . 
        . 1 . . b . f b f f . 1 . 
        . . 1 . . . . f b . 1 . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . 1 . . . f b . 1 . . 
        . 1 1 . b . f b f f . 1 . 
        1 . f b . . f b f b . . 1 
        . b f f b f b f b . b . 1 
        . f b b f f b f f . . . . 
        . . f f b b 3 b b f f . . 
        . . . . f f b f f b b f . 
        . . b . b f b f b f f b . 
        . . . b f b f . . b f . . 
        1 . . f f b f . b 1 . . . 
        . 1 1 . b f . . . . 1 1 1 
        `,img`
        . . . . . . . . . . . . . 
        . . 1 . b f . . . 1 1 1 . 
        . 1 . f f b f . b . . . 1 
        1 . . b f b f . . b f . . 
        . . b . b f b f b f f b . 
        . . . . f f b f f b b f . 
        . . f f b b 3 b b f f . . 
        . f b b f f b f f . . . . 
        . b f f b f b f b . b . . 
        . . f b . . f b f b . . . 
        . . . . b . f b f f . . 1 
        . 1 . . . . . f b . . . 1 
        `],
    150,
    characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    animSprite,
    [img`
        . . . . 1 . . . . . 1 . . 
        . . 1 1 . . b f b . . 1 . 
        . 1 . . b . f b f f . . 1 
        1 . f b . . f b f b . . 1 
        . b f f b f b f b . b . 1 
        . f b b f f b f f . . . . 
        . . f f b b 3 b b f f . . 
        b . . . f f b f f b b f . 
        . . b . b f b f b f f b . 
        1 . . b f b f . . b f . 1 
        . 1 . f f b f . b . . 1 . 
        . . . . b f . . . . 1 . . 
        `,img`
        . . 1 . . . . . 1 1 1 . . 
        b 1 . . b f . . . . . b . 
        . 1 . f f b f . b . . . . 
        . 1 . b f b f . . b f . . 
        . . b . b f b f b f f b . 
        . . . . f f b f f b b f . 
        . . f f b b 3 b b f f . . 
        . f b b f f b f f . . . . 
        . b f f b f b f b . b . 1 
        . b f b . . f b f b . 1 . 
        . 1 . . b . f b f f . 1 . 
        . . 1 . b . . f b . 1 . . 
        `,img`
        . . . . . . . . . . . . . 
        . . b 1 . . . f b . 1 . . 
        . 1 1 . b . f b f f . 1 . 
        1 . f b . . f b f b . . 1 
        . b f f b f b f b . b . 1 
        . f b b f f b f f . . . . 
        . . f f b b 3 b b f f . . 
        . . . . f f b f f b b f . 
        . . b . b f b f b f f b . 
        . . . b f b f . . b f . . 
        1 . . f f b f . b 1 . . . 
        . 1 1 . b f . . . . 1 1 b 
        `,img`
        . . . . . . . b . . . . . 
        . . 1 . b f . . . 1 1 1 . 
        . 1 . f f b f . b . . . 1 
        1 . . b f b f . . b f . . 
        . . b . b f b f b f f b . 
        . . . . f f b f f b b f . 
        . . f f b b 3 b b f f . . 
        . f b b f f b f f . . . . 
        . b f f b f b f b . b . . 
        . . f b . . f b f b . . . 
        . . . . b . f b f f . . 1 
        . 1 b . b . . f b . b . 1 
        `],
    150,
    characterAnimations.rule(Predicate.MovingDown, Predicate.MovingLeft, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    animSprite,
    [img`
        . . . . 1 . . . . . 1 . . 
        . . 1 1 . . b f b . . 1 . 
        . 1 . . b . f b f f . . 1 
        1 . f b . . f b f b . . 1 
        . b f f b f b f b . b . 1 
        . f b b f f b f f . . . . 
        . . f f b b 3 b b f f . . 
        b . . . f f b f f b b f . 
        . . b . b f b f b f f b . 
        1 . . b f b f . . b f . 1 
        . 1 . f f b f . b . . 1 . 
        . . . . b f . . . . 1 . . 
        `,img`
        . . 1 . . . . . 1 1 1 . . 
        b 1 . . b f . . . . . b . 
        . 1 . f f b f . b . . . . 
        . 1 . b f b f . . b f . . 
        . . b . b f b f b f f b . 
        . . . . f f b f f b b f . 
        . . f f b b 3 b b f f . . 
        . f b b f f b f f . . . . 
        . b f f b f b f b . b . 1 
        . b f b . . f b f b . 1 . 
        . 1 . . b . f b f f . 1 . 
        . . 1 . b . . f b . 1 . . 
        `,img`
        . . . . . . . . . . . . . 
        . . b 1 . . . f b . 1 . . 
        . 1 1 . b . f b f f . 1 . 
        1 . f b . . f b f b . . 1 
        . b f f b f b f b . b . 1 
        . f b b f f b f f . . . . 
        . . f f b b 3 b b f f . . 
        . . . . f f b f f b b f . 
        . . b . b f b f b f f b . 
        . . . b f b f . . b f . . 
        1 . . f f b f . b 1 . . . 
        . 1 1 . b f . . . . 1 1 b 
        `,img`
        . . . . . . . b . . . . . 
        . . 1 . b f . . . 1 1 1 . 
        . 1 . f f b f . b . . . 1 
        1 . . b f b f . . b f . . 
        . . b . b f b f b f f b . 
        . . . . f f b f f b b f . 
        . . f f b b 3 b b f f . . 
        . f b b f f b f f . . . . 
        . b f f b f b f b . b . . 
        . . f b . . f b f b . . . 
        . . . . b . f b f f . . 1 
        . 1 b . b . . f b . b . 1 
        `],
    150,
    characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    animSprite,
    [img`
        . . . . 1 . . . . . 1 . . 
        . . 1 1 . . b f b . . 1 . 
        . 1 . . b . f b f f . . 1 
        1 . f b . . f b f b . . 1 
        . b f f b f b f b . b . 1 
        . f b b f f b f f . . . . 
        . . f f b b 3 b b f f . . 
        b . . . f f b f f b b f . 
        . . b . b f b f b f f b . 
        1 . . b f b f . . b f . 1 
        . 1 . f f b f . b . . 1 . 
        . . . . b f . . . . 1 . . 
        `,img`
        . . 1 . . . . . 1 1 1 . . 
        b 1 . . b f . . . . . b . 
        . 1 . f f b f . b . . . . 
        . 1 . b f b f . . b f . . 
        . . b . b f b f b f f b . 
        . . . . f f b f f b b f . 
        . . f f b b 3 b b f f . . 
        . f b b f f b f f . . . . 
        . b f f b f b f b . b . 1 
        . b f b . . f b f b . 1 . 
        . 1 . . b . f b f f . 1 . 
        . . 1 . b . . f b . 1 . . 
        `,img`
        . . . . . . . . . . . . . 
        . . b 1 . . . f b . 1 . . 
        . 1 1 . b . f b f f . 1 . 
        1 . f b . . f b f b . . 1 
        . b f f b f b f b . b . 1 
        . f b b f f b f f . . . . 
        . . f f b b 3 b b f f . . 
        . . . . f f b f f b b f . 
        . . b . b f b f b f f b . 
        . . . b f b f . . b f . . 
        1 . . f f b f . b 1 . . . 
        . 1 1 . b f . . . . 1 1 b 
        `,img`
        . . . . . . . b . . . . . 
        . . 1 . b f . . . 1 1 1 . 
        . 1 . f f b f . b . . . 1 
        1 . . b f b f . . b f . . 
        . . b . b f b f b f f b . 
        . . . . f f b f f b b f . 
        . . f f b b 3 b b f f . . 
        . f b b f f b f f . . . . 
        . b f f b f b f b . b . . 
        . . f b . . f b f b . . . 
        . . . . b . f b f f . . 1 
        . 1 b . b . . f b . b . 1 
        `],
    150,
    characterAnimations.rule(Predicate.MovingDown, Predicate.MovingRight, Predicate.FacingRight)
    )
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
	
})
let myEffect: SpreadEffectData = null
let shootingatyouuuuuuuuuuuuuuuuuuuuuuuuu = false
let projectile2: Sprite = null
let snow: Sprite = null
let pointer_place = 0
let seline = false
let cantmove = false
let isJumping = false
let isHittingHead = false
let isLanding = false
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let animSprite: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999911111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999991111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999911111111111111199999999111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999111111111111111119999911111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999111111111111111111999911111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999991111111111111111111199111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999911199991111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999111119911111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999111111911111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999991111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999991111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999991111111111111111111111111111111111111111111111999999999999999999999999999999991111199999999999999999999999999999999999999999991111999999999999999
    9999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999991111111999999911199999999999999999999999999999911111119111199999999
    9999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999991111111199111111119999999999999999999999999999111111111111119999999
    9999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999911111111119111111111999999999999999999999999991111111111111111999999
    9999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999911111111111111111111199999999999999999999999911111111111111111999999
    9999999999999999111111111111111111111111111111111111111111111999999999999999999999999999999911111111111111111111199111999999999999999999911111111111111111999999
    9999999999999991111111111111111111111111111111111111111111999999999999999999999999999999999911111111111111111111111111199999999999999999111111111111111111999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111999999999999999111111111111111111999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111199999999999999911111111111111111999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111119999999999999999111111111111119999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111119999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999996666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999966666666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999666666666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999996666666666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999966666666666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999666666666666666666999999999999999999999999999999999999966669999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999996666666666666666666666999999999999999999999999999999996666669999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999966666666666666666666666669999999999999999999999999999666666666999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999666666666666666666666666666699999999999999999999999996666666666999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999966666666666666666666666666666669999999999999999999999966666666666699999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999996666666666666666666666666666666666999999999999999999996666666666666669999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999666666666666666666666666666666666666669999999999999999966666666666666669999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999996666666666666666666666666666666666666666669999999999999666666666666666666699999999999999999999999999999999999999999999999999
    9999999999999999999999999999999996666666666666666666666666666666666666666666666999999999996666666666666666666666669999999999999999999999999999999999999999999999
    9999999999999999999999999999999966666666666666666666666666666666666666666666666669999999966666666666666666666666666699999999999999999999999969999999999999999999
    9999999999999999999999999999966666666666666666666666666666666666666666666666666666699999666666666666666666666666666666999999999999999999996666699999999999999999
    9999999999999999999999999996666666666666666666666666666666666666666666666666666666966666666666666666666666666666666666666999999999999999666666669999999999999999
    9999999999999999999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999966666666666699999999999999
    9999999999999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999666666666666699999999999999
    9999999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699966666666666666666999999999999
    9999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999
    9999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
mySprite = sprites.create(img`
    . . . . f f . f f . . . . 
    . . . . f 3 f f 3 f f . . 
    . . . . f b b b b b b f . 
    . . . . f b b b 1 b 1 f . 
    . . . . f b b b b b b f . 
    . . . . f f f f f f f . . 
    . . . . f b b b b b f . . 
    . f . . f f b b b b f f . 
    f . . f b b f b b b f b f 
    . f f f f f f f f f f f . 
    . . . . f b b f b b f . . 
    . . . . f f f f f f f . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
let circleLight = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.Invisible, true)
animSprite = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ........ffff........
    ......ffbbbbff......
    .....fbb3331bbf.....
    ....fb33333111bf....
    ...fb3333313333bf...
    ...fb3333333333bf...
    ..fb3333333f33f3bf..
    ..fb3333333f33f3bf..
    ..fb3333333f33f3bf..
    ..fb3333333f33f3bf..
    ...fb3333333333bf...
    ...fb3333333333bf...
    ....fbbbbbbbbbbf....
    .....ffffffffff.....
    `, SpriteKind.display)
animSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
mySprite.fx = 500
mySprite.ay = 500
playeranims()
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    tiles.placeOnTile(mySprite, value)
    tileUtil.replaceAllTiles(assets.tile`myTile5`, assets.tile`transparency16`)
}
let l = sprites.create(img`
    e b b e 
    e 4 4 e 
    e 5 5 e 
    e b b e 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    d 
    `, SpriteKind.Player)
let mySoftBody = softbody.createSoftBody(
mySprite2,
1,
3,
true
)
softbody.setSpringStiffness(mySoftBody, 0.5)
softbody.setDamping(mySoftBody, 0.9)
softbody.addSegmentToSoftBody(l, mySoftBody)
softbody.setMaxStretch(mySoftBody, 4)
mySprite2.setFlag(SpriteFlag.GhostThroughSprites, true)
l.setFlag(SpriteFlag.GhostThroughSprites, true)
multilights.toggleLighting(true)
multilights.addLightSource(
l,
10,
20,
1
)
let camera = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f f f f . . 
    . . . . . . . . . . f 9 9 f . . 
    . . f f f f f f f f f f f f f . 
    . . f c c c c c b b b c c c f . 
    . . f c 2 2 c b 9 9 1 b c c f . 
    . . f c 2 2 c b 9 9 9 b c c f . 
    . . f c c c c b 9 9 9 b c c f . 
    . . f c c c c c b b b c c c f . 
    . . f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
camera.follow(mySprite, 300)
scene.cameraFollowSprite(camera)
camera.setFlag(SpriteFlag.Invisible, true)
camera.setFlag(SpriteFlag.GhostThroughWalls, true)
timer.after(800, function () {
    scroller.setLayerImage(scroller.BackgroundLayer.Layer4, img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ...bb......bb......bb......bb......................bb......bb......bb......bb......bb......................................bb......bb......bb......bb......bb...
        b.bbbb.bb.bbbb.bb.bbbb.bb.bbbb....................bbbb.bb.bbbb.bb.bbbb.bb.bbbb.bb.bbbb....................................bbbb.bb.bbbb.bb.bbbb.bb.bbbb.bb.bbbb.b
        dbbbbbbddbbbbbbddbbbbbbddbbbbbb..................bbbbbbddbbbbbbddbbbbbbddbbbbbbddbbbbbb..................................bbbbbbddbbbbbbddbbbbbbddbbbbbbddbbbbbbd
        ddb11bddddb11bddddb11bddddbbbbb..................bbbbbddddb11bddddb11bddddb11bddddbbbbb..................................bbbbbddddb11bddddb11bddddb11bddddb11bdd
        dd1111dddd1111dddd1111ddddbbbbbb................bbbbbbdddd1111dddd1111dddd1111ddddbbbbbb................................bbbbbbdddd1111dddd1111dddd1111dddd1111dd
        dd1111dddd1111dddd1111dddddbbbbb................bbbbbddddd1111dddd1111dddd1111dddddbbbbb................................bbbbbddddd1111dddd1111dddd1111dddd1111dd
        d1dddd1dd1dddd1dd1dddd1ddddbbbbb................bbbbbdddd1dddd1dd1dddd1dd1dddd1ddddbbbbb................................bbbbbdddd1dddd1dd1dddd1dd1dddd1dd1dddd1d
        d111111dd111111dd111111ddddbbbb..................bbbbdddd111111dd111111dd111111ddddbbbb..................................bbbbdddd111111dd111111dd111111dd111111d
        dd1111dddd1111dddd1111ddddeeeebbbd111dbbbd111dbbbdeeeedddd1111dddd1111dddd1111ddddeeeebbbd111dbbbd111dbbbd111dbbbd111dbbbdeeeedddd1111dddd1111dddd1111dddd1111dd
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eddeeddeeddeeddeeddeeddeedddddd111111111111111111ddddddeeddeeddeeddeeddeeddeeddeedddddd1111111111111111111111111111111111ddddddeeddeeddeeddeeddeeddeeddeeddeedde
        dddeeddddddeeddddddeeddddddd111111111111111dd1111111dddddddeeddddddeeddddddeeddddddd11111111111111111111111dd111111111111111dddddddeeddddddeeddddddeeddddddeeddd
        1dddddd11dddddd11dddddd1111111111111111111dddd11111111111dddddd11dddddd11dddddd111111111111111111111111111dddd1111111111111111111dddddd11dddddd11dddddd11dddddd1
        111111111111111111111111111111111111111111dddd111111111111111111111111111111111111111111111111111111111111dddd11111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111dbbbbd1111111111111111111111111111111111111111111111111111111111dbbbbd1111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111dddddd1111111111111111111111111111111111111111111111111111111111dddddd1111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111dddddddd11111111111111111111111111111111111111111111111111111111dddddddd111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111ee11114411441111111111111111111111111111111111111111111111111111ee111111111111111111111111111111111111111111114411441
        1111111111ddd1111111111111111111111111111ddeedd11ee44ee11111111111ddd11111111111111111111111111111ddd1111ddeedd111111111111111111111111111111111111111111ee44ee1
        111111111d111dd1111111111111111111111111dddeeddd1eeeeee1111111111d111dd111111111111dd111111111111d111dd1dddeeddd1111111111111111111dd11111111111111111111eeeeee1
        11111111111111111111111111111111111111111dddddd11ee11ee111111111111111111111111111dddd1111111111111111111dddddd1111111111111111111dddd1111111111111111111ee11ee1
        1111111111111111111111111111111111111111111111111eeddee111111111111111111111111111dddd11111111111111111111111111111111111111111111dddd1111111111111111111eeddee1
        1111111111111111111111111111111111111111111111111dddddd11111111111111111111111111dbbbbd111111111111111111111111111111111111111111dbbbbd111111111111111111dddddd1
        1111111111111111111111111111111111111111111111111dd11dd11111111111111111111111111dddddd111111111111111111111111111111111111111111dddddd111111111111111111dd11dd1
        11111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddd1111111111111111111111111111111111111111dddddddd111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111ee1111111111114411441144114411111111111111111111ee111111111111111111111111111
        1111111111111111111111111111111111ddd1111111111111111111111111111111111111ddd1111ddeedd1111111111ee44ee44ee44ee111111111111111111ddeedd111ddd1111111111111111111
        111dd1111111111111111111111111111d111dd1111111111111111111111111111111111d111dd1dddeeddd111111111eeeeeeeeeeeeee11111111111111111dddeeddd1d111dd11111111111111111
        11dddd111111111111111111111111111111111111111111111111111111111111111111111111111dddddd1111111111ee11ee11ee11ee111111111111111111dddddd1111111111111111111111111
        11dddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111eeddeeddeeddee1111111111111111111111111111111111111111111111111
        1dbbbbd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddd1111111111111111111111111111111111111111111111111
        1dddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dd11dd11dd11dd1111111111111111111111111111111111111111111111111
        dddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111ee11111111111111111111441144111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1ddeedd111111111111111111ee44ee1111111111111111111ddd1111111111111111111111111111111111111111111111111111111111111ddd1111111111111111111111111111111111111ddd111
        dddeeddd11111111111111111eeeeee111111111111111111d111dd1111111111111111111111111111111111111111111111111111111111d111dd1111111111111111111111111111111111d111dd1
        1dddddd111111111111111111ee11ee111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111eebbee111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1bbbb1111bbbb1111bbbb1111bbbbbb11bbbb1111bbbb1111bbbb1111bbbb1111bbbb1111bbbb1111bbbb1111bbbb1111bbbb1111bbbb1111bbbb1111bbbb1111bbbb1111bbbb1111bbbb1111bbbb111
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer4)
    scroller.setCameraScrollingMultipliers(0.5, 0.1, scroller.BackgroundLayer.Layer4)
    scroller.setLayerImage(scroller.BackgroundLayer.Layer2, img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ......cccc............cccc............cccc............cccc............cccc............cccc............cccc............cccc............cccc............cccc......
        ....cccccccc........cccccccc........cccccccc........cccccccc........cccccccc........cccccccc........cccccccc........cccccccc........cccccccc........cccccccc....
        ..cccccccccccc....cccccccccccc....cccccccccccc....cccccccccccc....cccccccccccc....cccccccccccc....cccccccccccc....cccccccccccc....cccccccccccc....cccccccccccc..
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer2)
    scroller.setCameraScrollingMultipliers(0.3, 0, scroller.BackgroundLayer.Layer2)
    scroller.setLayerImage(scroller.BackgroundLayer.Layer1, img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbb5bbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbb5bbbbb1bbbbbb1bbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5b5bbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb515bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb515bbbbbbbbbbbbbbbbbbb
        bbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbb5bbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbb5bbbbbbbbbbb1bbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbb
        bbb51115bbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbb111bbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbb5b5bbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbb1bbbbbbbbb5bbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbb5bbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbb515bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbb
        bbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1b
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbb5bbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbb5bbbbb1bbbbbb1bbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5b5bbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1b
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb515bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb515bbbbbbbbbbbbbbbbbbbb
        bbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbb5bbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbb5bbbbbbbbbbb1bbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbb
        bb51115bbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbb111bbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbb5b5bbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbb1bbbbbbbbb5bbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbb5bbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1b
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbb515bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbb
        bbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb51115bbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbb
        bbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbb5bbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb515bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer1)
    scroller.setCameraScrollingMultipliers(0.2, 0.1, scroller.BackgroundLayer.Layer1)
})
mySprite4 = sprites.create(img`
    2 2 2 2 2 2 2 2 2 
    2 . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 
    `, SpriteKind.hitbox)
mySprite4.setFlag(SpriteFlag.Invisible, true)
mySprite5 = sprites.create(img`
    . f f f f f f f . . 
    . f c c c c c c f . 
    . f c c c 1 d 1 f . 
    . f c c c c c c f . 
    . f f f f f f f . . 
    . f b b 7 b 7 f . . 
    . f f 7 b 7 b f f . 
    f c c f b b 7 f c f 
    . f f f f f f f f . 
    . f b b f b b f . . 
    . f f f f f f f . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite5, assets.tile`myTile27`)
let mySprite3 = sprites.create(img`
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    `, SpriteKind.Player)
mySprite6 = sprites.create(img`
    . . 2 . . 
    . 2 . 2 . 
    2 . 2 . 2 
    . 2 . 2 . 
    . . 2 . . 
    `, SpriteKind.Player)
let mySprite7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite8 = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Player)
game.onUpdate(function () {
    let not_shot = 0
    spriteutils.placeAngleFrom(
    mySprite8,
    pointer_place,
    16,
    mySprite
    )
    spriteutils.placeAngleFrom(
    mySprite4,
    90,
    6,
    mySprite
    )
    mySprite8.setFlag(SpriteFlag.GhostThroughWalls, true)
    mySprite4.setFlag(SpriteFlag.GhostThroughWalls, true)
    pointer_place += spriteutils.degreesToRadians(controller.dy(200))
    if (not_shot) {
        mySprite3.setPosition(mySprite.x, mySprite.y)
    }
})
game.onUpdate(function () {
    mySprite6.follow(mySprite, 1000)
})
game.onUpdate(function () {
    snow = sprites.create([img`
        8 
        `, img`
        1 
        `, img`
        9 
        `]._pickRandom(), SpriteKind.partical)
    if (Math.percentChance(50)) {
        animation.runImageAnimation(
        snow,
        [[img`
            1 . 1 
            . 1 . 
            1 . 1 
            `,img`
            . 1 . 
            1 1 1 
            . 1 . 
            `], [img`
            9 . 9 
            . 9 . 
            9 . 9 
            `,img`
            . 9 . 
            9 9 9 
            . 9 . 
            `], [img`
            8 . 8 
            . 8 . 
            8 . 8 
            `,img`
            . 8 . 
            8 8 8 
            . 8 . 
            `]]._pickRandom(),
        100,
        true
        )
    }
    snow.setFlag(SpriteFlag.Ghost, true)
    snow.setPosition(randint(scene.cameraProperty(CameraProperty.Left), scene.cameraProperty(CameraProperty.Right)), scene.cameraProperty(CameraProperty.Top))
    snow.vy = randint(40, 120)
    snow.setFlag(SpriteFlag.AutoDestroy, true)
    snow.z = -3
})
game.onUpdate(function () {
    softbody.updateAllVisibleSoftBodies()
    softbody.getSegment(1, mySoftBody).setPosition(mySprite.x, mySprite.y)
    softbody.setLineColor(mySoftBody, 4)
})
game.onUpdate(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        timer.after(250, function () {
            isLanding = false
        })
    }
})
game.onUpdate(function () {
    animSprite.x = mySprite.x
    animSprite.bottom = mySprite.bottom
    if (!(cantmove)) {
        if (controller.left.isPressed()) {
            mySprite.vx = -120
        } else if (controller.right.isPressed()) {
            mySprite.vx = 120
        }
        if (isJumping) {
            mySprite.vy = -220
        }
    }
})
game.onUpdate(function () {
    mySprite4.setPosition(mySprite.x + 0, mySprite.y + 8)
})
game.onUpdate(function () {
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.HittingWallLeft))) {
        mySprite.ay = 250
        characterAnimations.loopFrames(
        animSprite,
        [img`
            f f . f f . . . . . . . . 
            f 3 f f 3 f f . . . . . . 
            f b b b b b b f . . . . . 
            f b b b 1 b 1 f . . . . . 
            f b b b b b b f . . . . . 
            f f f f f f f . . . . . . 
            f b b b b b f . . . . . . 
            f f f b b b f . . . . . . 
            f b b f b b f . . . . . . 
            f f f f f f f . . . . . . 
            f b b f b f . . . . . . . 
            f f f f f f . . . . . . . 
            `],
        150,
        characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        animSprite,
        [img`
            f f . f f . . . . . . . . 
            f 3 f f 3 f f . . . . . . 
            f b b b b b b f . . . . . 
            f b b b 1 b 1 f . . . . . 
            f b b b b b b f . . . . . 
            f f f f f f f . . . . . . 
            f b b b b b f . . . . . . 
            f f f b b b f . . . . . . 
            f b b f b b f . . . . . . 
            f f f f f f f . . . . . . 
            f b b f b f . . . . . . . 
            f f f f f f . . . . . . . 
            `],
        150,
        characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
        )
    } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.HittingWallRight))) {
        mySprite.ay = 250
        characterAnimations.loopFrames(
        animSprite,
        [img`
            . . . . . . . . f f . f f 
            . . . . . . f f 3 f f 3 f 
            . . . . . f b b b b b b f 
            . . . . . f 1 b 1 b b b f 
            . . . . . f b b b b b b f 
            . . . . . . f f f f f f f 
            . . . . . . f b b b b b f 
            . . . . . . f b b b f f f 
            . . . . . . f b b f b b f 
            . . . . . . f f f f f f f 
            . . . . . . . f b f b b f 
            . . . . . . . f f f f f f 
            `],
        150,
        characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        animSprite,
        [img`
            . . . . . . . . f f . f f 
            . . . . . . f f 3 f f 3 f 
            . . . . . f b b b b b b f 
            . . . . . f 1 b 1 b b b f 
            . . . . . f b b b b b b f 
            . . . . . . f f f f f f f 
            . . . . . . f b b b b b f 
            . . . . . . f b b b f f f 
            . . . . . . f b b f b b f 
            . . . . . . f f f f f f f 
            . . . . . . . f b f b b f 
            . . . . . . . f f f f f f 
            `],
        150,
        characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
        )
    } else {
        playeranims()
        mySprite.ay = 600
    }
})
game.onUpdate(function () {
    mySprite5.ay = 600
})
forever(function () {
    mySprite3.setPosition(mySprite5.x, mySprite5.y)
    pause(500)
})
forever(function () {
    while (characterAnimations.matchesRule(mySprite, characterAnimations.rule(characterAnimations.rule(Predicate.HittingWallDown, Predicate.MovingRight)))) {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), mySprite4.x, mySprite4.y, 10, 3, 3)
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Twinkle), mySprite4.x, mySprite4.y, 10, 3, 3)
        pause(100)
    }
    while (characterAnimations.matchesRule(mySprite, characterAnimations.rule(characterAnimations.rule(Predicate.HittingWallDown, Predicate.MovingLeft)))) {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Twinkle), mySprite4.x, mySprite4.y, 10, 3, 3)
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), mySprite4.x, mySprite4.y, 10, 3, 3)
        pause(100)
    }
})
forever(function () {
    while (characterAnimations.matchesRule(mySprite, characterAnimations.rule(characterAnimations.rule(Predicate.MovingUp, Predicate.HittingWallLeft)))) {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), mySprite.x, mySprite.y, 10, 3, 3)
        pause(100)
    }
    while (characterAnimations.matchesRule(mySprite, characterAnimations.rule(characterAnimations.rule(Predicate.MovingDown, Predicate.HittingWallRight)))) {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Twinkle), mySprite.x, mySprite.y, 10, 3, 3)
        pause(100)
    }
    while (characterAnimations.matchesRule(mySprite, characterAnimations.rule(characterAnimations.rule(Predicate.MovingUp, Predicate.HittingWallRight)))) {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), mySprite.x, mySprite.y, 10, 3, 3)
        pause(100)
    }
    while (characterAnimations.matchesRule(mySprite, characterAnimations.rule(characterAnimations.rule(Predicate.MovingDown, Predicate.HittingWallLeft)))) {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Twinkle), mySprite.x, mySprite.y, 10, 3, 3)
        pause(100)
    }
})
forever(function () {
    if (sight.isInSightCone(
    mySprite,
    mySprite5,
    35,
    0,
    35
    )) {
        mySprite3.setImage(img`
            2 
            2 
            2 
            2 
            . 
            2 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            `)
        mySprite6.setFlag(SpriteFlag.Invisible, false)
        seline = true
        pause(1500)
        while (sight.isInSightCone(
        mySprite,
        mySprite5,
        35,
        0,
        35
        )) {
            mySprite5.setImage(img`
                ...........fffffff............
                ..........fccccccf............
                ..........f1d1cccf............
                .....f....fccccccf............
                .ffffbffffffffffff............
                fcb444c55c4f7b7bbf............
                .ff4ff4cc4ffb7b7bf............
                ...fccffbfcf7bbbbf............
                ....ff..fbffffffff............
                .........f.fbbfbbf............
                ...........fffffff............
                `)
            projectile2 = sprites.create(img`
                5 5 5 
                `, SpriteKind.bullet)
            projectile2.setPosition(mySprite5.x, mySprite5.y)
            spriteutils.setVelocityAtAngle(projectile2, spriteutils.angleFrom(mySprite5, mySprite), 80)
            shootingatyouuuuuuuuuuuuuuuuuuuuuuuuu = false
            mySprite5.setImage(img`
                ...........fffffff............
                ..........fccccccf............
                ..........f1d1cccf............
                ......f...fccccccf............
                ..ffffbfffffffffff............
                .fcb444c55c47b7bbf............
                ..ff4ff4cc4fb7b7bf............
                ....fccffbfc7bbbbf............
                .....ff..fbfffffff............
                ..........ffbbfbbf............
                ...........fffffff............
                `)
            pause(500)
        }
    } else {
        mySprite3.setImage(img`
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            . 
            `)
        mySprite6.setFlag(SpriteFlag.Invisible, true)
        seline = false
        shootingatyouuuuuuuuuuuuuuuuuuuuuuuuu = true
    }
})
forever(function () {
    while (characterAnimations.matchesRule(mySprite, characterAnimations.rule(characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft)))) {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), mySprite.x, mySprite.y, 10, 3, 3)
        pause(100)
    }
    while (characterAnimations.matchesRule(mySprite, characterAnimations.rule(characterAnimations.rule(Predicate.MovingDown, Predicate.MovingLeft)))) {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), mySprite.x, mySprite.y, 10, 3, 3)
        pause(100)
    }
    while (characterAnimations.matchesRule(mySprite, characterAnimations.rule(characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight)))) {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), mySprite.x, mySprite.y, 10, 3, 3)
        pause(100)
    }
    while (characterAnimations.matchesRule(mySprite, characterAnimations.rule(characterAnimations.rule(Predicate.MovingDown, Predicate.MovingRight)))) {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), mySprite.x, mySprite.y, 10, 3, 3)
        pause(100)
    }
    while (characterAnimations.matchesRule(mySprite, characterAnimations.rule(characterAnimations.rule(Predicate.MovingDown)))) {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), mySprite.x, mySprite.y, 10, 3, 3)
        pause(100)
    }
    while (characterAnimations.matchesRule(mySprite, characterAnimations.rule(characterAnimations.rule(Predicate.MovingUp)))) {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), mySprite.x, mySprite.y, 10, 3, 3)
        pause(100)
    }
})
forever(function () {
    // Particles that travel full screen can create a starfield effect with some careful tweaking.
    myEffect = extraEffects.createCustomSpreadEffectData(
    [
    9,
    1,
    9,
    1,
    1,
    6
    ],
    true,
    [
    1,
    2,
    3,
    4,
    5,
    6
    ],
    extraEffects.createPercentageRange(2, 0),
    extraEffects.createPercentageRange(0, 0),
    extraEffects.createTimeRange(75000, 125000)
    )
    myEffect.gravity = 20
    myEffect.extraVX = -100
    myEffect.extraVY = 10
    myEffect.sineShiftRadius = 10
    myEffect.decelerateAfterDuration = 100000
    extraEffects.createSpreadEffectAt(myEffect, mySprite.x, mySprite.y, 100000, 10000, 4)
    pause(100)
})
forever(function () {
    if (controller.B.isPressed()) {
        if (!(characterAnimations.matchesRule(mySprite, characterAnimations.rule(characterAnimations.rule(Predicate.HittingWallDown))) || (characterAnimations.matchesRule(mySprite, characterAnimations.rule(characterAnimations.rule(characterAnimations.rule(Predicate.HittingWallRight)))) || characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.HittingWallLeft))))) {
            while (!(characterAnimations.matchesRule(mySprite, characterAnimations.rule(characterAnimations.rule(Predicate.HittingWallDown))) || (characterAnimations.matchesRule(mySprite, characterAnimations.rule(characterAnimations.rule(characterAnimations.rule(Predicate.HittingWallRight)))) || characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.HittingWallLeft))))) {
                mySprite.ay = 10
                extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Twinkle), mySprite4.x, mySprite4.y, 10, 3, 3)
                extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Twinkle), mySprite4.x, mySprite4.y, 10, 3, 3)
                mySprite.setVelocity(spriteutils.angleFrom(mySprite, mySprite8) * 10, spriteutils.angleFrom(mySprite, mySprite8) * 10)
                pause(1)
            }
        }
    }
})
forever(function () {
    if (shootingatyouuuuuuuuuuuuuuuuuuuuuuuuu) {
        characterAnimations.loopFrames(
        mySprite5,
        [img`
            . f f f f f f f . . 
            . f c c c c c c f . 
            . f c c c 1 d 1 f . 
            . f c c c c c c f . 
            . f f f f f f f f . 
            . f b b 7 b 7 f . . 
            . f f 7 b 7 b f f . 
            f c c f b b 7 f c f 
            . f f f f f f f f . 
            . f b b f b b f . . 
            . f f f f f f f . . 
            `,img`
            . . . . . . . . . . 
            . f f f f f f f . . 
            . f c c c c c c f . 
            . f c c c 1 d 1 f . 
            . f c c c c c c f . 
            . f f f f f f f f . 
            . f f b 7 b 7 f f . 
            f c c f b 7 b f c f 
            . f f f f f f f f . 
            . f b b f b b f . . 
            . f f f f f f f . . 
            `,img`
            . . . . . . . . . . 
            . f f f f f f f . . 
            . f c c c c c c f . 
            . f c c c 1 d 1 f . 
            . f c c c c c c f . 
            . f f f f f f f f . 
            . f b b 7 b 7 f . . 
            . f f 7 b 7 b f f . 
            f c c f f f f f c f 
            . f f b f b b f f . 
            . f f f f f f f . . 
            `,img`
            . . . . . . . . . . 
            . f f f f f f f . . 
            . f c c c c c c f . 
            . f c c c 1 d 1 f . 
            . f c c c c c c f . 
            . f f f f f f f f . 
            . f b b 7 b 7 f . . 
            . f f 7 b 7 b f f . 
            f c c f f f f f c f 
            . f f b f b b f f . 
            . f f f f f f f . . 
            `,img`
            . f f f f f f f . . 
            . f c c c c c c f . 
            . f c c c 1 d 1 f . 
            . f c c c c c c f . 
            . f f f f f f f f . 
            . f b b 7 b 7 f . . 
            . f b 7 b 7 b f . . 
            . f f b b b 7 f f . 
            f c c f f f f f c f 
            . f f b f b b f f . 
            . f f f f f f f . . 
            `,img`
            . f f f f f f f . . 
            . f c c c c c c f . 
            . f c c c 1 d 1 f . 
            . f c c c c c c f . 
            . f f f f f f f f . 
            . f b b 7 b 7 f . . 
            . f b 7 b 7 b f . . 
            . f f b b b 7 f f . 
            f c c f f f f f c f 
            . f f b f b b f f . 
            . f f f f f f f . . 
            `,img`
            . f f f f f f f . . 
            . f c c c c c c f . 
            . f c c c 1 d 1 f . 
            . f c c c c c c f . 
            . f f f f f f f f . 
            . f b b 7 b 7 f . . 
            . f f 7 b 7 b f f . 
            f c c f b b 7 f c f 
            . f f f f f f f f . 
            . f b b f b b f . . 
            . f f f f f f f . . 
            `,img`
            . f f f f f f f . . 
            . f c c c c c c f . 
            . f c c c 1 d 1 f . 
            . f c c c c c c f . 
            . f f f f f f f f . 
            . f b b 7 b 7 f . . 
            . f f 7 b 7 b f f . 
            f c c f b b 7 f c f 
            . f f f f f f f f . 
            . f b b f b b f . . 
            . f f f f f f f . . 
            `],
        150,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        mySprite5,
        [img`
            . . f f f f f f f . 
            . f c c c c c c f . 
            . f 1 d 1 c c c f . 
            . f c c c c c c f . 
            . f f f f f f f f . 
            . . f 7 b 7 b b f . 
            . f f b 7 b 7 f f . 
            f c f 7 b b f c c f 
            . f f f f f f f f . 
            . . f b b f b b f . 
            . . f f f f f f f . 
            `,img`
            . . . . . . . . . . 
            . . f f f f f f f . 
            . f c c c c c c f . 
            . f 1 d 1 c c c f . 
            . f c c c c c c f . 
            . f f f f f f f f . 
            . f f 7 b 7 b f f . 
            f c f b 7 b f c c f 
            . f f f f f f f f . 
            . . f b b f b b f . 
            . . f f f f f f f . 
            `,img`
            . . . . . . . . . . 
            . . f f f f f f f . 
            . f c c c c c c f . 
            . f 1 d 1 c c c f . 
            . f c c c c c c f . 
            . f f f f f f f f . 
            . . f 7 b 7 b b f . 
            . f f b 7 b 7 f f . 
            f c f f f f f c c f 
            . f f b b f b f f . 
            . . f f f f f f f . 
            `,img`
            . . . . . . . . . . 
            . . f f f f f f f . 
            . f c c c c c c f . 
            . f 1 d 1 c c c f . 
            . f c c c c c c f . 
            . f f f f f f f f . 
            . . f 7 b 7 b b f . 
            . f f b 7 b 7 f f . 
            f c f f f f f c c f 
            . f f b b f b f f . 
            . . f f f f f f f . 
            `,img`
            . . f f f f f f f . 
            . f c c c c c c f . 
            . f 1 d 1 c c c f . 
            . f c c c c c c f . 
            . f f f f f f f f . 
            . . f 7 b 7 b b f . 
            . . f b 7 b 7 b f . 
            . f f 7 b b b f f . 
            f c f f f f f c c f 
            . f f b b f b f f . 
            . . f f f f f f f . 
            `,img`
            . . f f f f f f f . 
            . f c c c c c c f . 
            . f 1 d 1 c c c f . 
            . f c c c c c c f . 
            . f f f f f f f f . 
            . . f 7 b 7 b b f . 
            . . f b 7 b 7 b f . 
            . f f 7 b b b f f . 
            f c f f f f f c c f 
            . f f b b f b f f . 
            . . f f f f f f f . 
            `,img`
            . . f f f f f f f . 
            . f c c c c c c f . 
            . f 1 d 1 c c c f . 
            . f c c c c c c f . 
            . f f f f f f f f . 
            . . f 7 b 7 b b f . 
            . f f b 7 b 7 f f . 
            f c f 7 b b f c c f 
            . f f f f f f f f . 
            . . f b b f b b f . 
            . . f f f f f f f . 
            `,img`
            . . f f f f f f f . 
            . f c c c c c c f . 
            . f 1 d 1 c c c f . 
            . f c c c c c c f . 
            . f f f f f f f f . 
            . . f 7 b 7 b b f . 
            . f f b 7 b 7 f f . 
            f c f 7 b b f c c f 
            . f f f f f f f f . 
            . . f b b f b b f . 
            . . f f f f f f f . 
            `],
        150,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
    } else {
    	
    }
})
forever(function () {
    if (spriteutils.distanceBetween(mySprite, camera) < 40) {
        camera.follow(mySprite, 90)
    } else if (spriteutils.distanceBetween(mySprite, camera) > 40) {
        camera.follow(mySprite, 300)
    }
})
