import React from "react";
import { create, act } from "react-test-renderer";
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
  test("after creation span should be dispayed", () => {
    let component
    act(() => {
      component = create(<ProfileStatus status={'Hello Test!'}/>);
    });
    const root = component.root;
    const span = root.findByType('span')
    expect(span).not.toBeNull();
  });

  test("input should be displayed in editMode instead of span", () => {
    let component
    act(() => {
      component = create(<ProfileStatus status={'Hello Test!'}/>);
    });
    const root = component.root;

    const span = root.findByType('span')
    span.props.onDoubleClick()
    const input = root.findByType('input')

    expect(input.props.value).toBe('Hello Test!');
  });
});