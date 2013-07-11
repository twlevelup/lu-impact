ig.module(
    'game.main'
)
.requires(
    'impact.game',
    'impact.font',
    'game.entities.player'
)
.defines(function(){

LevelUp = ig.Game.extend({
    entities: [
        new EntityPlayer(160, 120, {})
    ],

    init: function() {
        ig.input.bind(ig.KEY.UP_ARROW, 'up');
        ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
        ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
        ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
    },

    update: function() {
        // Update all entities and backgroundMaps
        this.parent();

        // Add your own, additional update code here
    },

    draw: function() {
        // Draw all entities and backgroundMaps
        this.parent();
    }
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', LevelUp, 60, 320, 240, 2 );

});
