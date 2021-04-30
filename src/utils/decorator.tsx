import React from "react";
import { ContentBlock, ContentState, CompositeDecorator } from "draft-js";
import Link from "../components/Link";
import { css } from "emotion";

const LinkDecoratorComp: Function = ({
  contentState,
  entityKey,
  decoratedText,
}: {
  contentState: ContentState;
  entityKey: string;
  children: string;
  blockKey: string;
  decoratedText: string;
  dir: string;
  end: number;
  offsetKey: string;
  start: number;
}) => {
  const { url } = contentState.getEntity(entityKey).getData();
  return (
    <Link
      to={url}
      title={url}
      className={css`
        text-decoration: underline;
      `}
    >
      {decoratedText}
    </Link>
  );
};

export const decorators = new CompositeDecorator([
  {
    strategy,
    component: LinkDecoratorComp,
  },
]);

export const matchesEntityType = (type: string): boolean => type === "LINK";
export function strategy(
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState
): void {
  if (!contentState) return;
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      matchesEntityType(contentState.getEntity(entityKey).getType())
    );
  }, callback);
}
