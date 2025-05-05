/* Game Options - Scroll down for new game options setup */
var OPTION_DOUBLE_TILES = "DoubleTiles";
var OPTION_INSANE_TILES = "InsaneTiles";

var OPTION_ALL_ACCENT_TILES = "AllAccentTiles";
var OPTION_DOUBLE_ACCENT_TILES = "DoubleAccentTiles";
var OPTION_ANCIENT_OASIS_EXPANSION = "AncientOasisExpansion";
var OPTION_INFORMAL_START = "InformalStart";
var NO_HARMONY_VISUAL_AIDS = "NoHarmonyAids";

var OPTION_FULL_TILES = "FullTileSet";

var CLASSIC_RULES = "ClassicRules";

var FULL_POINTS_SCORING = "FullPointsScoring";

/* Vagabond */
var SWAP_BISON_WITH_LEMUR = "SwapBisonWithLemur";

/* Ginseng */
var GINSENG_PROTECT_5 = "GinsengProtect5";

/* Blooms */
var FOUR_SIDED_BOARD = "BoardSize4";	// It's funny because the name is all wrong, but I always think of it in those words
var SHORTER_GAME = "ShorterGame";
var SIX_SIDED_BOARD = "BoardSize6";
var EIGHT_SIDED_BOARD = "BoardSize8";

/* Hexentafl */
var FIVE_SIDED_BOARD = "BoardSize5";
var OPTION_ATTACKERS_MOVE_FIRST = "HostAttacks";
var KING_MOVES_LIKE_PAWNS = "KingMovesLikePawns";
var MORE_ATTACKERS = "MoreAttackers";

/* Street Pai Sho */
var FORMAL_WIN_CONDITION = "FormalWinCondition";
var ORIGINAL_BOARD_SETUP = "OriginalBoardSetup";
var RELEASE_CAPTIVE_TILES = "ReleaseCaptiveTiles";
var BONUS_MOVEMENT_5 = "BonusMovementWithCaptive";
var BONUS_MOVEMENT_BASED_ON_NUM_CAPTIVES = "BonusMovementPerCaptive";

/* Overgrowth */
var LESS_TILES = "LessTiles";

/* Playground */
var PLAY_IN_SPACES = "PlayInSpaces";
var VAGABOND_ROTATE = "VagabondBoardRotation";
var ADEVAR_ROTATE = "AdevarBoardRotation";
var SPECTATORS_CAN_PLAY = "AllowSpectatorsToPlay";

var ADEVAR_GUEST_ROTATE = "AdevarBoardGuestRotation";

/* Adevar */
var ADEVAR_LITE = "LiteGame";

/* Game Option Legacy Map - These were stored as full names in database before current setup, must support */
var legacyGameOptionsMap = {};
legacyGameOptionsMap[OPTION_DOUBLE_TILES] = "Double Tiles";
legacyGameOptionsMap[OPTION_INSANE_TILES] = "Insane Tiles";
legacyGameOptionsMap[OPTION_ALL_ACCENT_TILES] = "All Accent Tiles";
legacyGameOptionsMap[OPTION_DOUBLE_ACCENT_TILES] = "Double (8) Accent Tiles";
legacyGameOptionsMap[OPTION_ANCIENT_OASIS_EXPANSION] = "Ancient Oasis Expansion";
legacyGameOptionsMap[OPTION_INFORMAL_START] = "Informal Start";
legacyGameOptionsMap[NO_HARMONY_VISUAL_AIDS] = "No Harmony Visual Aids";
legacyGameOptionsMap[GINSENG_PROTECT_5] = "FAKE Ginseng Protect 5";
legacyGameOptionsMap[OPTION_FULL_TILES] = "Full tile set";
legacyGameOptionsMap[CLASSIC_RULES] = "Classic Rules";
legacyGameOptionsMap[FULL_POINTS_SCORING] = "Full points scoring";
legacyGameOptionsMap[FOUR_SIDED_BOARD] = "Board size: 4 per side";
legacyGameOptionsMap[SHORTER_GAME] = "Shorter game";
legacyGameOptionsMap[SIX_SIDED_BOARD] = "Board size: 6 per side";
legacyGameOptionsMap[EIGHT_SIDED_BOARD] = "Board size: 8 per side";
legacyGameOptionsMap[FIVE_SIDED_BOARD] = "Board size: 5 per side";
legacyGameOptionsMap[OPTION_ATTACKERS_MOVE_FIRST] = "Host plays as attackers";
legacyGameOptionsMap[KING_MOVES_LIKE_PAWNS] = "King moves like pawns";
legacyGameOptionsMap[MORE_ATTACKERS] = "More Attackers!";
legacyGameOptionsMap[FORMAL_WIN_CONDITION] = "Formal win condition";
legacyGameOptionsMap[ORIGINAL_BOARD_SETUP] = "Original Board Setup";
legacyGameOptionsMap[RELEASE_CAPTIVE_TILES] = "Release Captive Tiles";
legacyGameOptionsMap[BONUS_MOVEMENT_5] = "Bonus Movement With Captive (5)";
legacyGameOptionsMap[BONUS_MOVEMENT_BASED_ON_NUM_CAPTIVES] = "Bonus Movement (+1) Per Captive";
legacyGameOptionsMap[LESS_TILES] = "Less Tiles";
legacyGameOptionsMap[PLAY_IN_SPACES] = "Play In Spaces";
legacyGameOptionsMap[VAGABOND_ROTATE] = "Vagabond Board Rotation";
legacyGameOptionsMap[ADEVAR_ROTATE] = "Adevar Board Rotation";
legacyGameOptionsMap[ADEVAR_GUEST_ROTATE] = "Adevar Board Guest Rotation";

legacyGameOptionsMap[ADEVAR_LITE] = "Lite - Beginner Game";

/* New Game Options Setup */

/* Game Option Descriptions - Game Options must have nice names :) */
var gameOptionDescriptions = copyObject(legacyGameOptionsMap);
gameOptionDescriptions[SPECTATORS_CAN_PLAY] = "Allow Spectators to make moves";
gameOptionDescriptions[SWAP_BISON_WITH_LEMUR] = "Trifle Preview: Lemur instead of Bison";

/* Tumbleweed */
var HEXHEX_11 = "hexhex11";
var HEXHEX_6 = "hexhex6";
var NO_REINFORCEMENT = "NoReinforcement";
var CHOOSE_NEUTRAL_STACK_SPACE = "ChooseNeutralStackSpace";
var RUMBLEWEED = "Rumbleweed";
var CRUMBLEWEED = "Crumbleweed";
var TUMBLE_6 = "Tumble6";
var TUMBLESTONE = "Tumblestone";
gameOptionDescriptions[HEXHEX_11] = "Board Size: 11 per side";
gameOptionDescriptions[HEXHEX_6] = "Board Size: 6 per side";
gameOptionDescriptions[NO_REINFORCEMENT] = "No Reinforcement";
gameOptionDescriptions[CHOOSE_NEUTRAL_STACK_SPACE] = "Host places neutral stack";
gameOptionDescriptions[RUMBLEWEED] = "\"Rumbleweed\" (beta)";
gameOptionDescriptions[CRUMBLEWEED] = "\"Crumbleweed\" (beta)";
gameOptionDescriptions[TUMBLESTONE] = "\"Tumblestone\"";
gameOptionDescriptions[TUMBLE_6] = "Tumble-6 - First to create a 6 size settlement wins";
var TUMPLETORE = "Tumpletore";
gameOptionDescriptions[TUMPLETORE] = "\"Tumpletore\" (beta) - Settling based on control, not settlement value";
var NO_SETUP_PHASE = "NoSetupPhase";
gameOptionDescriptions[NO_SETUP_PHASE] = "No Setup Phase";

/* Meadow */
var DYNAMIC_GROUP_LIMIT = "DynamicGroupLimit";
gameOptionDescriptions[DYNAMIC_GROUP_LIMIT] = "Group limit based on board size";

/* Fire */
var HIDE_RESERVE_TILES = "HideReserveTiles";
gameOptionDescriptions[HIDE_RESERVE_TILES] = "Hide reserve tiles";
var MIDLINE_OPENER = "MidlineOpener";							// 
gameOptionDescriptions[MIDLINE_OPENER] = "Guest midline plant";	// Old game option
var ETHEREAL_ACCENT_TILES = "EtherealAccentTiles";
gameOptionDescriptions[ETHEREAL_ACCENT_TILES] = "Ethereal accent tiles";
var ORIGINAL_BENDER_EXPANSION = "OriginalBenderExpansion"
gameOptionDescriptions[ORIGINAL_BENDER_EXPANSION] = "EXPANSION: Original Benders";

/* Skud */
var DIAGONAL_MOVEMENT = "DiagonalMovement";	// April Fools 2021
gameOptionDescriptions[DIAGONAL_MOVEMENT] = "Diagonal Movement";
var EVERYTHING_CAPTURE = "EverythingCapture";	// April Fools 2021
gameOptionDescriptions[EVERYTHING_CAPTURE] = "Everything Captures Everything";
var NO_WHEELS = "NoWheels";
gameOptionDescriptions[NO_WHEELS] = "No Wheels";
var IGNORE_CLASHING = "IgnoreClashing";
gameOptionDescriptions[IGNORE_CLASHING] = "Ignore Clashing Rule";
var SPECIAL_FLOWERS_BOUNCE = "SpecialFlowersBounce";
gameOptionDescriptions[SPECIAL_FLOWERS_BOUNCE] = "Special Flower Reincarnation";
var VARIABLE_ACCENT_TILES = "VariableAccentTiles";
gameOptionDescriptions[VARIABLE_ACCENT_TILES] = "Variable Accent Tiles";
var NO_ALT_WIN = "NoAltWin";
gameOptionDescriptions[NO_ALT_WIN] = "No Alt Win Condition";

var GINSENG_ROTATE = "GinsengBoardRotation";
gameOptionDescriptions[GINSENG_ROTATE] = "Ginseng Board Rotation";
var GINSENG_GUEST_ROTATE = "GinsengGuestRotation";
gameOptionDescriptions[GINSENG_GUEST_ROTATE] = "Ginseng Guest Rotation";

var FULL_GRID = "FullGrid";
gameOptionDescriptions[FULL_GRID] = "Full Grid";

var SQUARE_SPACES = "SquareSpaces";
gameOptionDescriptions[SQUARE_SPACES] = "Square Spaces";

var BOTTOMLESS_RESERVES = "BottomlessReserves";
gameOptionDescriptions[BOTTOMLESS_RESERVES] = "Bottomless Reserves";

var UNDERGROWTH_SIMPLE = "UndergrowthSimple";
gameOptionDescriptions[UNDERGROWTH_SIMPLE] = "Simplicity (testing)";

var HEXHEX_10 = "Hexhex10Board";
gameOptionDescriptions[HEXHEX_10] = "Board size: 10 per side";

/* Ginseng */

var GINSENG_GP5 = "GinsengProtect5";
gameOptionDescriptions[GINSENG_GP5] = "Ginseng Protect 5";

var CAPTURE_ABILITY_TARGET_1 = "CaptureAbilityTarget1";
gameOptionDescriptions[CAPTURE_ABILITY_TARGET_1] = "Lion Turtle and Dragon Capture Limit 1";

var LION_TURTLE_ABILITY_TARGET_TOUCHING_GARDEN = "LTAbilityTargetTouchingGarden";	// Unused
gameOptionDescriptions[LION_TURTLE_ABILITY_TARGET_TOUCHING_GARDEN] = "Lion Turtle Ability: Captures adjacent Original Benders that are touching a red/white garden";

var LION_TURTLE_ABILITY_ANYWHERE = "LTAbilityAnywhere";	// Defunct
gameOptionDescriptions[LION_TURTLE_ABILITY_ANYWHERE] = "Lion Turtle Ability: Captures adjacent Original Benders, whether they are touching central garden or not";

var BADGERMOLE_NOT_PREVENT_TRAP_PUSH = "BadgermoleNotPreventTrapPush";
gameOptionDescriptions[BADGERMOLE_NOT_PREVENT_TRAP_PUSH] = "Badgermole does not prevent trap/push";

var ORIGINAL_BENDER_ABILITIES_TARGET_TOUCHING_RED_WHITE = "OrigBenderAbilitiesTargetGardenTiles";
gameOptionDescriptions[ORIGINAL_BENDER_ABILITIES_TARGET_TOUCHING_RED_WHITE] = "Original Bender Abilities only affect tiles touching Central Gardens";

var SWAP_BISON_AND_DRAGON = "SwapBisonDragon";
gameOptionDescriptions[SWAP_BISON_AND_DRAGON] = "Swap Bison and Dragon Position";

var SWAP_BISON_AND_DRAGON_ABILITIES = "SwapBisonDragonAbilities";
gameOptionDescriptions[SWAP_BISON_AND_DRAGON_ABILITIES] = "Swap Bison and Dragon Abilities";

var DRAGON_CANCELS_ABILITIES = "DragonCancelsAbilities";
gameOptionDescriptions[DRAGON_CANCELS_ABILITIES] = "Dragon Cancels Abilities";

var GINSENG_2_POINT_0 = "Ginseng2_0";
gameOptionDescriptions[GINSENG_2_POINT_0] = "Ginseng 2.0";

var GINSENG_1_POINT_0 = "Ginseng1_0";
gameOptionDescriptions[GINSENG_1_POINT_0] = "Ginseng 1.0";

/* Key Pai Sho */
var NO_EFFECT_TILES = "NoEffectTiles";
gameOptionDescriptions[NO_EFFECT_TILES] = "No Effect Tiles";

/* Beyond The Edges of The Maps */
var EDGES_12x12_GAME = "12x12Game";
gameOptionDescriptions[EDGES_12x12_GAME] = "Smaller game (12x12 board)";

var EDGES_MOVE_4_2 = "Move4_2";
gameOptionDescriptions[EDGES_MOVE_4_2] = "Less movement (4 and 2)";


/* -------- */

function getGameOptionDescription(optionName) {
	if (gameOptionDescriptions.hasOwnProperty(optionName)) {
		return gameOptionDescriptions[optionName];
	} else {
		return optionName;
	}
}

function gameOptionEnabled(optionName) {
	return ggOptions.includes(optionName) || ggOptions.includes(legacyGameOptionsMap[optionName]);
}

function getEnabledGameOptions() {
	return copyArray(ggOptions);
}

