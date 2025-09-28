import { render,screen } from '@testing-library/react';
import Stepper from '../../../components/stepper/stepper';

const checkStepper = (steps: string[], currentStep = 0) => {
  	render(<Stepper steps={steps} currentStep={currentStep} />);

	// stepwrapper
	const wrapper = document.querySelector('div.flex.items-center.justify-between') as HTMLElement;
  	// circle
	const circles = document.querySelectorAll('div.rounded-full.flex.items-center.justify-center');
	// label
	const labels = steps.map((_, i) => screen.getByText(String(i + 1)));
	// text
	const stepTexts = steps.map(t => screen.getByText(t));
	// text number
	expect(stepTexts.length).toBe(steps.length);
	// text value and color
	stepTexts.forEach((textNode, idx) => {
		expect(textNode.textContent).toBe(steps[idx]);
		if (idx <= currentStep) {
		expect(textNode.className).toMatch(/text-gray-700/);
		} else {
		expect(textNode.className).toMatch(/text-gray-500/);
		}
	});
	// line
	const lines: HTMLElement[] = [];
	circles.forEach((circle, idx) => {
		const parent = circle.parentElement?.parentElement;
		if (!parent) return;
		const line = parent.querySelector('div.flex-1') as HTMLElement | null;
		if (line) lines.push(line);
	});
	
  	return { wrapper, circles, labels, stepTexts, lines, steps, currentStep };
};

describe('Stepper Different_Sets_Tests', () => {
	const test = (steps: string[], currentStep = 0) => {
		const { wrapper, circles, labels, stepTexts, lines } = checkStepper(steps, currentStep);
		// circle number
		expect(circles.length).toBe(steps.length);
		// circle color
		circles.forEach((circle, idx) => {
			if (idx <= currentStep) {
			expect(circle.className).toMatch(/bg-blue-500/);
			} else {
			expect(circle.className).toMatch(/bg-gray-200/);
			}
		});
		
		// label number
		expect(labels.length).toBe(steps.length);
		// label value and color
		labels.forEach((label, idx) => {
			expect(label.textContent).toBe(String(idx + 1));
			if (idx <= currentStep) {
			expect(label.className).toMatch(/text-white/);
			} else {
			expect(label.className).toMatch(/text-gray-700/);
			}
		});

		// line number
		expect(lines.length).toBe(steps.length - 1);
		// line color
		lines.forEach((line, idx) => {
			if (idx < currentStep) {
			expect(line.className).toMatch(/bg-blue-500/);
			} else {
			expect(line.className).toMatch(/bg-gray-200/);
			}
		});

	}
	it('1 step', () => test(['step']));
	it('2 steps', () => test(['KurzText', 'LangeTextcontent']));
	it('3 steps', () => test(['Step 1', 'Step 2', 'Step 3'], 1));
	it('4 steps', () => test(['step1', 'step2', 'step3', 'step4']));
});

const resizeWindow = (width: number) => {
  (window as any).innerWidth = width;
  window.dispatchEvent(new Event('resize'));
};

describe('Stepper-Breakpoints', () => {
  const steps = ['one', 'two', 'three', 'four'];

  const testBreakpoint = (
    width: number,
    wrapperW: string,
    circleH: string,
    circleW: string,
    labelH: string,
    labelTop: string,
    labelTextClass: string,
    stepTextH: string,
    stepTextTop: string,
    stepTextClass: string,
    lineH: string
  ) => {
    resizeWindow(width);
    const { wrapper, circles, labels, stepTexts, lines } = checkStepper(steps, 1);

    // Stepwrapper width
    expect(wrapper.className).toMatch(new RegExp(wrapperW));

    // Circle height and width
    circles.forEach(circle => {
      expect(circle.className).toMatch(new RegExp(circleH));
      expect(circle.className).toMatch(new RegExp(circleW));
    });

    // Label heigth / top / text class
    labels.forEach(label => {
      expect(label.className).toMatch(new RegExp(labelH));
      expect(label.className).toMatch(new RegExp(labelTop));
      expect(label.className).toMatch(new RegExp(labelTextClass));
    });

    // text heigth / top / text class
    stepTexts.forEach(text => {
      expect(text.className).toMatch(new RegExp(stepTextH));
      expect(text.className).toMatch(new RegExp(stepTextTop));
      expect(text.className).toMatch(new RegExp(stepTextClass));
    });

    // Line height
    lines.forEach(line => {
      expect(line.className).toMatch(new RegExp(lineH));
    });
  };

  it('small screen', () => {
    testBreakpoint(
      375,
      'w-\\[270px\\]',
      'h-\\[30px\\]',
      'w-\\[30px\\]',
      'h-\\[16px\\]',    
      'top-\\[7px\\]',
      'text-xs.*leading-4',
      'h-4',
      'top-8',
      'leading-4',
      'h-\\[4px\\]'
    );
  });

  it('large screen', () => {
    testBreakpoint(
      1200,
      'lg:w-\\[360px\\]',
      'lg:h-\\[40px\\]',
      'lg:w-\\[40px\\]',
      'lg:h-\\[20px\\]',
      'lg:top-\\[10px\\]',
      'lg:text-sm.*lg:leading-5',
      'lg:h-6',
      'lg:top-11',
      'lg:leading-6',
      'lg:h-\\[6px\\]'
    );
  });
});

describe('Stepper-IndependenceTest', () => {
  it('multiple instances independent', () => {
    const steps1 = ['Step 1', 'Step 2', 'Step 3'];
    const steps2 = ['KurzText', 'LangeTextcontent'];

    render(
      <div>
        <div id="wrapper-1">
          <Stepper steps={steps1} currentStep={1} />
        </div>
        <div id="wrapper-2">
          <Stepper steps={steps2} currentStep={0} />
        </div>
      </div>
    );

    const wrapper1 = document.getElementById('wrapper-1')!;
    const wrapper2 = document.getElementById('wrapper-2')!;

    steps2.forEach(label => {
      expect(wrapper1.textContent).not.toContain(label);
    });

    steps1.forEach(label => {
      expect(wrapper2.textContent).not.toContain(label);
    });
  });
});

