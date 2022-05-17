import { BigInt } from "@graphprotocol/graph-ts";
import {
  Yagmi,
  goalCreated,
  powApproved,
  powRejected,
  powUpdated,
} from "../generated/Yagmi/Yagmi";
import { Goal } from "../generated/schema";

export function handleGoalCreated(eventOne: goalCreated): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entityOne = Goal.load(
    eventOne.transaction.hash.toHex() + "-" + eventOne.logIndex.toString()
  );

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entityOne) {
    entityOne = new Goal(
      eventOne.transaction.hash.toHex() + "-" + eventOne.logIndex.toString()
    );
  }

  entityOne._goalId = eventOne.params.goalId;
  entityOne._goalTitle = eventOne.params.goalTitle;
  entityOne._goalDesc = eventOne.params.goalDesc;
  entityOne._setterAddress = eventOne.params.setterAddr.toHexString();
  entityOne._partnerAddress = eventOne.params.partnerAddr.toHexString();
  entityOne._amount = eventOne.params.amount;
  entityOne._dueDate = eventOne.params.dueDate;
  entityOne._powUrl = eventOne.params.powUrl;
  entityOne._powStatus = eventOne.params.powStatus;

  entityOne.save();
}

export function handlePowUpdated(eventOne: powUpdated): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entityOne = Goal.load(
    eventOne.transaction.hash.toHex() + "-" + eventOne.logIndex.toString()
  );

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entityOne) {
    entityOne = new Goal(
      eventOne.transaction.hash.toHex() + "-" + eventOne.logIndex.toString()
    );
  }

  entityOne._goalId = eventOne.params.goalId;
  entityOne._goalTitle = eventOne.params.goalTitle;
  entityOne._goalDesc = eventOne.params.goalDesc;
  entityOne._setterAddress = eventOne.params.setterAddr.toHexString();
  entityOne._partnerAddress = eventOne.params.partnerAddr.toHexString();
  entityOne._amount = eventOne.params.amount;
  entityOne._dueDate = eventOne.params.dueDate;
  entityOne._powUrl = eventOne.params.powUrl;
  entityOne._powStatus = eventOne.params.powStatus;

  entityOne.save();
}

export function handlePowApproved(eventOne: powApproved): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entityOne = Goal.load(
    eventOne.transaction.hash.toHex() + "-" + eventOne.logIndex.toString()
  );

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entityOne) {
    entityOne = new Goal(
      eventOne.transaction.hash.toHex() + "-" + eventOne.logIndex.toString()
    );
  }

  entityOne._goalId = eventOne.params.goalId;
  entityOne._goalTitle = eventOne.params.goalTitle;
  entityOne._goalDesc = eventOne.params.goalDesc;
  entityOne._setterAddress = eventOne.params.setterAddr.toHexString();
  entityOne._partnerAddress = eventOne.params.partnerAddr.toHexString();
  entityOne._amount = eventOne.params.amount;
  entityOne._dueDate = eventOne.params.dueDate;
  entityOne._powUrl = eventOne.params.powUrl;
  entityOne._powStatus = eventOne.params.powStatus;

  entityOne.save();
}

export function handlePowRejected(eventOne: powRejected): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entityOne = Goal.load(
    eventOne.transaction.hash.toHex() + "-" + eventOne.logIndex.toString()
  );

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entityOne) {
    entityOne = new Goal(
      eventOne.transaction.hash.toHex() + "-" + eventOne.logIndex.toString()
    );
  }

  entityOne._goalId = eventOne.params.goalId;
  entityOne._goalTitle = eventOne.params.goalTitle;
  entityOne._goalDesc = eventOne.params.goalDesc;
  entityOne._setterAddress = eventOne.params.setterAddr.toHexString();
  entityOne._partnerAddress = eventOne.params.partnerAddr.toHexString();
  entityOne._amount = eventOne.params.amount;
  entityOne._dueDate = eventOne.params.dueDate;
  entityOne._powUrl = eventOne.params.powUrl;
  entityOne._powStatus = eventOne.params.powStatus;

  entityOne.save();
}
