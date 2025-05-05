
Trifle.BrainFactory = function() {

}

Trifle.BrainFactory.prototype.createTriggerBrain = function(abilityTriggerInfo, triggerContext) {
	switch(abilityTriggerInfo.triggerType) {
		case Trifle.AbilityTriggerType.whileInsideTemple:
			return new Trifle.WhileInsideTempleTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whileOutsideTemple:
			return new Trifle.WhileOutsideTempleTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whileTargetTileIsOnBoard:
			return new Trifle.WhileTargetTileIsOnBoardTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whileTargetTileIsAdjacent:
			return new Trifle.WhileTargetTileIsAdjacentTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whileTargetTileIsSurrounding:
			return new Trifle.WhileTargetTileIsSurroundingTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whileTargetTileIsInZone:
			return new Trifle.WhileTargetTileIsInZoneTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whileTargetTileIsInLineOfSight:
			return new Trifle.WhileTargetTileIsInLineOfSightTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whileTargetTileIsInLineOfSightIn5:
			return new Trifle.WhileTargetTileIsInLineOfSightIn5TriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whenTargetTileLandsInZone:
			return new Trifle.WhenTargetTileLandsInZoneTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whenTargetTileMovesFromWithinZone:
			return new Trifle.WhenTargetTileMovesFromWithinZoneTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whenCapturedByTargetTile:
			return new Trifle.WhenCapturedByTargetTileTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whenCapturingTargetTile:
			return new Trifle.WhenCapturingTargetTileTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whenLandsAdjacentToTargetTile:
			return new Trifle.WhenLandsAdjacentToTargetTileTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whenLandsSurroundingTargetTile:
			return new Trifle.WhenLandsSurroundingTargetTileTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whenTargetTileLandsAdjacent:
			return new Trifle.WhenTargetTileLandsAdjacentTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whenTargetTileLandsSurrounding:
			return new Trifle.WhenTargetTileLandsSurroundingTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whenDeployed:
			return new Trifle.WhenDeployedTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whenActiveMovement:
			return new Trifle.WhenActiveMovementTriggerBrain(triggerContext);
		case Trifle.AbilityTriggerType.whenTargetTileLandsInTemple:
			return new Trifle.WhenTargetTileLandsInTempleTriggerBrain(triggerContext);
		default:
			debug("No Trigger Brain created for trigger: " + abilityTriggerInfo.triggerType);
	}
};

Trifle.BrainFactory.createAbilityBrain = function(abilityName, abilityObject) {
	switch(abilityName) {
		/* Action abilities will need specific ability brains
			but ongoing abilities that are checked for in game logic can have generic brain */
		case Trifle.AbilityName.captureTargetTiles:
			return new Trifle.CaptureTargetTilesAbilityBrain(abilityObject);
		case Trifle.AbilityName.growGigantic:
			return new Trifle.GrowGiganticAbilityBrain(abilityObject);
		case Trifle.AbilityName.recordTilePoint:
			return new Trifle.RecordTilePointAbilityBrain(abilityObject);
		case Trifle.AbilityName.moveTileToRecordedPoint:
			return new Trifle.MoveTileToRecordedPointAbilityBrain(abilityObject);
		case Trifle.AbilityName.moveTargetTile:
			return new Trifle.MoveTargetTileAbilityBrain(abilityObject);
		case Trifle.AbilityName.moveTargetTileToPile:
			return new Trifle.MoveTargetTileToPileAbilityBrain(abilityObject);
		case Trifle.AbilityName.exchangeWithCapturedTile:
			return new Trifle.ExchangeWithCapturedTileAbilityBrain(abilityObject);
		default:
			return new Trifle.SimpleOngoingAbilityBrain(abilityObject);
	}
};

Trifle.BrainFactory.createTargetBrain = function(targetType, abilityObject) {
	switch(targetType) {
		case Trifle.TargetType.triggerTargetTiles:
			return new Trifle.TriggerTargetTilesTargetBrain(abilityObject);
		case Trifle.TargetType.allTiles:
			return new Trifle.AllTilesTargetBrain(abilityObject);
		case Trifle.TargetType.surroundingTiles:
			return new Trifle.SurroundingTilesTargetBrain(abilityObject);
		case Trifle.TargetType.thisTile:
			return new Trifle.ThisTileTargetBrain(abilityObject);
		case Trifle.TargetType.chosenCapturedTile:
			return new Trifle.ChosenCapturedTileTargetBrain(abilityObject);
	}
};

