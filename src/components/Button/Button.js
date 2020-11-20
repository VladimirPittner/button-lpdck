// @flow
import * as React from 'react';
import classNames from 'classnames';
import { readableColor } from 'polished';
import styles from './Button.scss';

type ButtonType = 'button' | 'reset' | 'submit';
type AriaRole = 'button' | 'checkbox' | 'radio' | 'switch';
type ButtonColor =
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange';
type ButtonSize = 'small' | 'medium' | 'large';

type CommonProps = {
  ariaLabel?: string,
  children: string,
  id?: string,
  isDisabled?: boolean,
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  role?: AriaRole,
  tabIndex?: number,
  type?: ButtonType,
};

type ButtonBaseProps = {
  ...CommonProps,
  className?: string,
  style?: Object,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
};

type ButtonProps = {
  ...CommonProps,
  color?: ButtonColor,
  size?: ButtonSize,
};

type ButtonCustomProps = {
  ...CommonProps,
  color?: string,
  width?: string,
  height?: string,
};

/**
 * Skeleton for Button implementation
 */
const ButtonBase = (props: ButtonBaseProps) => {
  const {
    ariaLabel,
    children,
    className,
    id,
    isDisabled = false,
    onClick,
    onMouseEnter,
    onMouseLeave,
    role = 'button',
    style,
    tabIndex,
    type = 'button',
  } = props;
  const [count, setCount] = React.useState<number>(0);

  const buttonTabIndex = isDisabled ? -1 : tabIndex;

  const handleOnClick = (event: SyntheticEvent<HTMLButtonElement>): void => {
    setCount(count + 1);
    if (onClick) onClick(event);
  };

  return (
    <button
      aria-label={ariaLabel}
      className={classNames(styles.ButtonBase, className)}
      disabled={isDisabled}
      id={id}
      onClick={!isDisabled ? handleOnClick : undefined}
      onMouseEnter={onMouseEnter || undefined}
      onMouseLeave={onMouseLeave || undefined}
      role={role}
      style={style}
      tabIndex={buttonTabIndex}
      // button always get type
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {children} <span>{count}</span>
    </button>
  );
};

/**
 * Basic button with predefined color, width and height variants
 */
const Button = (props: ButtonProps) => {
  const {
    ariaLabel,
    children,
    color,
    id,
    isDisabled,
    onClick,
    role,
    size = 'medium',
    tabIndex,
    type,
  } = props;

  const getColorStyles = () => {
    switch (color) {
      case 'red':
        return styles.ButtonRed;
      case 'pink':
        return styles.ButtonPink;
      case 'grape':
        return styles.ButtonGrape;
      case 'violet':
        return styles.ButtonViolet;
      case 'indigo':
        return styles.ButtonIndigo;
      case 'blue':
        return styles.ButtonBlue;
      case 'cyan':
        return styles.ButtonCyan;
      case 'teal':
        return styles.ButtonTeal;
      case 'green':
        return styles.ButtonGreen;
      case 'lime':
        return styles.ButtonLime;
      case 'yellow':
        return styles.ButtonYellow;
      case 'orange':
        return styles.ButtonOrange;
      default:
        return undefined;
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small': {
        return styles.ButtonSmall;
      }
      case 'medium': {
        return styles.ButtonMedium;
      }
      case 'large': {
        return styles.ButtonLarge;
      }
      default:
        return undefined;
    }
  };

  return (
    <ButtonBase
      ariaLabel={ariaLabel}
      className={classNames(getColorStyles(), getSizeStyles())}
      id={id}
      isDisabled={isDisabled}
      onClick={onClick}
      role={role}
      tabIndex={tabIndex}
      type={type}
    >
      {children}
    </ButtonBase>
  );
};

/**
 * Button that can accept any "color value". Not the most common use-case but can be handy
 * when you want to let user assign any color to the button.
 * Also have possibility to set any width or height. Even more extreme case and possibly
 * unwanted, because of the loss of consistency.
 * Usable in scenario, where maybe user have full control over to look of UI
 *
 * If the use case for this button is none of the above mentioned, you should use normal Button
 *
 */
const ButtonCustom = (props: ButtonCustomProps) => {
  const {
    ariaLabel,
    children,
    color,
    id,
    isDisabled,
    height,
    onClick,
    role,
    tabIndex,
    type,
    width,
  } = props;
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const customStyle = {
    width: width || undefined,
    height: height || undefined,
    backgroundColor: color && isHovered ? color : undefined,
    borderColor: color || undefined,
    color: color && isHovered ? readableColor(color, 'white', 'black') : undefined,
  };

  return (
    <ButtonBase
      ariaLabel={ariaLabel}
      id={id}
      isDisabled={isDisabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role={role}
      style={customStyle}
      tabIndex={tabIndex}
      type={type}
    >
      {children}
    </ButtonBase>
  );
};

export { Button, ButtonCustom };
