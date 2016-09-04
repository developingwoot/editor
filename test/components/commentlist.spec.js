import React from 'react';

// Once we set up Karma to run our tests through webpack
// we will no longer need to have these long relative paths
import CommentList from 'components/commentlist';
import {
  describeWithDOM,
  mount,
  shallow,
  spyLifecycle
} from 'enzyme';

describe('(Component) CommentList', () => {

    
  it("CommentList can be mounted", function() {
    const props = {
       onMount: () => { },
       isActive: false
    };

    expect(mount(<CommentList {...props} />).find('CommentList').length).to.equal(1);
  });

  it("calls componentDidMount Once", function() {
    sinon.spy(CommentList.prototype, 'componentDidMount');

    const props = {
        onMount: () => {},
        isActive: false
    };

    mount(<CommentList {...props} />);

    expect(CommentList.prototype.componentDidMount).to.have.property('callCount', 1);

  });

  it("renders as ul", () => { 
      const props = { onMount: () => { } };
      const wrapper = shallow(<CommentList {...props} />);

      expect(wrapper.type()).to.eql('ul');
  });

  describe('when active...', () => {
    const wrapper = shallow(
      // just passing isActive is an alias for true
      <CommentList onMount={() => {}} isActive />
    )
    it('should render with className active-list', () => {
      expect(wrapper.prop('className')).to.eql('active-list');
    });
  });

  describe('when inactive...', () => {
    const wrapper = shallow(
      <CommentList onMount={() => {}} isActive={false} />
    )
    it('should render with className inactive-list', () => {
      expect(wrapper.prop('className')).to.eql('inactive-list');
    });
  });
  
});